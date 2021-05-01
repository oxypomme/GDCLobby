import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toast } from 'bulma-toast';

import { Player } from '../player';
import PlayerActions from '../store/player/player.actions';
import { selectPlayerLogged } from '../store/player/player.selectors';
import { Mission } from '../mission';
import { selectMissionObj } from '../store/mission/mission.selectors';
import dayjs from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  playerLogged$: Observable<Player>;

  remainingTime: Duration;

  constructor(private store: Store<{ count: number }>) {
    this.playerLogged$ = store.select(selectPlayerLogged);
    store.select(selectMissionObj).subscribe({
      next: (mission) => {
        this.getRemainingTime(mission);
      },
    });
  }

  ngOnInit(): void {}

  logOut() {
    this.store.dispatch(PlayerActions.logOut());
    toast({ message: 'Vous êtes déconnecté' });
  }

  getRemainingTime(mission: Mission) {
    if (mission) {
      const dur = dayjs.duration(dayjs(mission?.date).diff(dayjs()));
      this.remainingTime = dayjs().isBefore(mission?.date) ? dur : null;
    } else {
      this.remainingTime = dayjs.duration({
        days: 999,
      });
    }
  }
}
