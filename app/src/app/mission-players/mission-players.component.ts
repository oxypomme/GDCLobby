import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { toast } from 'bulma-toast';
import dayjs from 'dayjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Player } from '../player';
import { Role } from '../role';
import { selectMissionObj } from '../store/mission/mission.selectors';
import { JWToken } from '../store/player/player.reducer';
import {
  selectPlayerLogged,
  selectPlayerToken,
} from '../store/player/player.selectors';

@Component({
  selector: 'app-mission-players',
  templateUrl: './mission-players.component.html',
  styleUrls: ['./mission-players.component.css'],
})
export class MissionPlayersComponent implements OnInit {
  @Input() mission?: Mission;

  selectedTeams: string[] = [];

  playerLogged$?: Observable<Player>;
  playerLogged: Player;
  isAlreadyRegistered: boolean;
  token: JWToken;

  teams: {
    [name: string]: Role[];
  } = {};

  constructor(
    private missionService: MissionService,
    private store: Store,
    private titleService: Title
  ) {
    this.titleService.setTitle(`Joueurs | ${environment.title}`);
    this.playerLogged$ = this.store.select(selectPlayerLogged);
    this.playerLogged$.subscribe({
      next: (player) => (this.playerLogged = player),
    });

    this.store.select(selectPlayerToken).subscribe({
      next: (jwt) => (this.token = jwt),
    });

    this.store.select(selectMissionObj).subscribe({
      next: (mission) => {
        if (mission) this.onFetchMission(mission);
      },
    });
  }

  ngOnInit(): void {}

  dateValid(): boolean {
    return dayjs().isBefore(dayjs(this.mission.date).subtract(7, 'd'));
  }

  onFetchMission(mission: Mission): void {
    this.mission = mission;

    for (const role of mission.roles) {
      if (!this.teams[role.team.name]) {
        this.teams = {
          ...this.teams,
          [role.team.name]: [role],
        };
      } else {
        this.teams = {
          ...this.teams,
          [role.team.name]: [...this.teams[role.team.name], role],
        };
      }
    }

    this.playerLogged$.subscribe((player) => {
      this.isAlreadyRegistered =
        mission.roles?.findIndex((r) => r.player?.id === player?.id) >= 0;
    });
  }

  getObjKey(obj: Object): string[] {
    return Object.keys(obj);
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
        if (role) toast({ message: `✔️ Inscrit pour ${role?.name}` });
        else toast({ message: '⚠️ Erreur', type: 'is-danger' });
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
          toast({ message: `📌 Joueur exclu`, type: 'is-warning' });
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
          toast({ message: `📌 Retiré de ${role?.name}`, type: 'is-warning' });
        else toast({ message: '⚠️ Erreur', type: 'is-danger' });
      });
  }

  openAll(teams: string[]) {
    if (this.selectedTeams.length > 0) {
      this.selectedTeams = [];
    } else {
      this.selectedTeams = teams;
    }
  }

  addSelectedTeams(team: string) {
    if (this.selectedTeams.includes(team)) {
      this.selectedTeams.splice(this.selectedTeams.indexOf(team), 1);
    } else {
      this.selectedTeams.push(team);
    }
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
