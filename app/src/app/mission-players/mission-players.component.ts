import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Role } from '../role';
import { Player } from '../player';
import {
  selectPlayerLogged,
  selectPlayerToken,
} from '../store/player/player.selectors';
import { JWToken } from '../store/player/player.reducer';

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

  constructor(
    private missionService: MissionService,
    private store: Store<{ count: number }>
  ) {
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

  getMission(): void {
    const id = 1;
    this.missionService.getMission(id).subscribe((mission) => {
      this.mission = mission;

      this.playerLogged$.subscribe((player) => {
        this.isAlreadyRegistered =
          mission.roles?.findIndex((r) => r.player?.id === player?.id) >= 0;
      });
    });
  }

  joinMission(role: Role): void {
    const id = 1;
    const roleUpdated = {
      ...role,
      player: this.playerLogged,
      team: undefined,
    };
    this.missionService
      .updateRole(id, roleUpdated, this.token)
      .subscribe((role) => {
        console.log('callback', role);
        this.getMission();
      });
  }

  leaveMission(role: Role): void {
    const id = 1;
    const roleUpdated = {
      ...role,
      player: null,
      team: null,
    };
    this.missionService
      .updateRole(id, roleUpdated, this.token)
      .subscribe((role) => {
        console.log('callback', role);
        this.getMission();
      });
  }

  evalCondition(role: Role): Function {
    return Function(`"use strict";return ${role.condition}`)();
  }
}
