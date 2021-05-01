import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import MissionActions from './store/mission/mission.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GDCLobby';

  fetchMission() {
    this.store.dispatch(
      MissionActions.fetch.request({
        missionId: 1,
      })
    )
  }

  constructor(private store: Store) {
    this.fetchMission();
    setInterval(() => {
      this.fetchMission();
    }, 750);
  }
}
