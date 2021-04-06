import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Role } from '../role';
import { Player } from '../player';
import { selectPlayerLogged } from '../store/player/player.selectors';

@Component({
  selector: 'app-mission-players',
  templateUrl: './mission-players.component.html',
  styleUrls: ['./mission-players.component.css'],
})
export class MissionPlayersComponent implements OnInit {
  @Input() mission?: Mission;

  playerLogged$?: Observable<Player>;
  isAlreadyRegistered: boolean;

  constructor(
    private missionService: MissionService,
    private store: Store<{ count: number }>
  ) {
    this.playerLogged$ = this.store.select(selectPlayerLogged);
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
    console.log('JOINING MISSION');
  }

  leaveMission(role: Role): void {
    console.log('LEAVING MISSION');
  }

  evalCondition(role: Role): Function {
    return Function(`"use strict";return ${role.condition}`)();
  }
}
