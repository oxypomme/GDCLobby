import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Role } from '../role';
import { Store } from '@ngrx/store';
import { Player } from '../player';
import { Observable } from 'rxjs';
import { selectPlayerLogged } from '../store/player/player.selectors';

@Component({
  selector: 'app-mission-players',
  templateUrl: './mission-players.component.html',
  styleUrls: ['./mission-players.component.css'],
})
export class MissionPlayersComponent implements OnInit {
  @Input() mission?: Mission;

  playerLogged$: Observable<Player>;

  constructor(
    private missionService: MissionService,
    private store: Store<{ count: number }>
  ) {
    this.playerLogged$ = store.select(selectPlayerLogged);
  }

  ngOnInit(): void {
    this.getMission();
  }

  getMission(): void {
    const id = 1;
    this.missionService
      .getMission(id)
      .subscribe((mission) => (this.mission = mission));
  }

  evalCondition(role: Role): Function {
    return Function(`"use strict";return ${role.condition}`)();
  }
}
