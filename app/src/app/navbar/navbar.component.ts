import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from '../player';
import PlayerActions from '../store/player/player.actions';
import {
  selectIsPlayerLogged,
  selectPlayerLogged,
} from '../store/player/player.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged$: Observable<boolean>;
  playerLogged$: Observable<Player>;

  constructor(private store: Store<{ count: number }>) {
    this.isLogged$ = store.select(selectIsPlayerLogged);
    this.playerLogged$ = store.select(selectPlayerLogged);
  }

  ngOnInit(): void {}

  logOut() {
    this.store.dispatch(PlayerActions.logOut());
  }
}
