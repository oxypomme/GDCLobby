import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import PlayerActions from '../store/player/player.actions';
import { selectPlayerLogged } from '../store/player/player.selectors';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  username: string;
  password: string;
  isLogged$: Observable<boolean>;

  constructor(private store: Store<{ count: number }>) {
    this.isLogged$ = store.select(selectPlayerLogged);
  }

  ngOnInit(): void {}

  logIn() {
    this.store.dispatch(
      PlayerActions.logIn.request({
        credentials: { username: this.username, password: this.password },
      })
    );
  }

  logOut() {
    this.store.dispatch(PlayerActions.logOut());
  }

  register() {
    this.store.dispatch(
      PlayerActions.register({
        credentials: { username: this.username, password: this.password },
      })
    );
  }
}
