import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { toast } from 'bulma-toast';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Role } from '../role';
import { Player } from '../player';
import {
  selectPlayerLogged,
  selectPlayerToken,
} from '../store/player/player.selectors';
import { JWToken } from '../store/player/player.reducer';
import dayjs from 'dayjs';

@Component({
  selector: 'app-mission-players',
  templateUrl: './mission-players.component.html',
  styleUrls: ['./mission-players.component.css'],
})
export class MissionPlayersComponent implements OnInit {
  @Input() mission?: Mission;

  playerLogged$?: Observable<Player>;
  playerLogged: Player;
  isAlreadyRegistered: boolean;
  token: JWToken;

  teams: {
    [name: string]: Role[];
  } = {};

  constructor(private missionService: MissionService, private store: Store) {
    this.playerLogged$ = this.store.select(selectPlayerLogged);
    this.playerLogged$.subscribe({
      next: (player) => (this.playerLogged = player),
    });

    this.store.select(selectPlayerToken).subscribe({
      next: (jwt) => (this.token = jwt),
    });
  }

  ngOnInit(): void {
    this.getMission();
  }

  dateValid(): boolean {
    return dayjs().isBefore(dayjs(this.mission.date).subtract(7, 'd'));
  }

  getMission(): void {
    const id = 1;
    this.missionService.getMission(id).subscribe((mission) => {
      this.mission = mission;

      for (const role of mission.roles) {
        if (!this.teams[role.team.name]) {
          this.teams = {
            ...this.teams,
            [role.team.name]: [],
          };
        }
        this.teams = {
          ...this.teams,
          [role.team.name]: [...this.teams[role.team.name], role],
        };
      }

      this.playerLogged$.subscribe((player) => {
        this.isAlreadyRegistered =
          mission.roles?.findIndex((r) => r.player?.id === player?.id) >= 0;
      });
    });
  }

  getTeamsKey(): string[] {
    return Object.keys(this.teams);
  }

  joinMission(role: Role): void {
    const id = 1;
    const roleUpdated = {
      id: role.id,
      player: this.playerLogged,
    };
    this.missionService
      .updateRole(id, roleUpdated, this.token)
      .subscribe((role) => {
        if (role)
          toast({ message: `Vous êtes inscrit en tant que ${role?.name}` });
        else
          toast({ message: 'Une erreur est survenue...', type: 'is-danger' });
        this.getMission();
      });
  }

  kick(roleId) {
    const missId = 1;
    this.missionService
      .updateRole(
        missId,
        {
          id: roleId,
          player: null,
        },
        this.token
      )
      .subscribe({
        next: () => {
          toast({ message: 'Joueur exclu' });
          this.getMission();
        },
      });
  }
  leaveMission(role: Role): void {
    const id = 1;
    const roleUpdated = {
      id: role.id,
      player: null,
    };
    this.missionService
      .updateRole(id, roleUpdated, this.token)
      .subscribe((role) => {
        if (role)
          toast({ message: `Vous vous êtes retiré du rôle ${role?.name}` });
        else
          toast({ message: 'Une erreur est survenue...', type: 'is-danger' });
        this.getMission();
      });
  }

  /* Used to make conditions easier */
  missionPlayers() {
    return this.mission.roles?.filter((r) => r.player !== null).length;
  }

  evalCondition(role: Role): Function {
    return Function(
      'missionPlayers',
      `"use strict"; return ${role.condition}`
    )(this.missionPlayers());
  }
}
