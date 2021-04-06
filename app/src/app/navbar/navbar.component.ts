import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import PlayerActions from '../store/player/player.actions';
import { selectIsPlayerLogged } from '../store/player/player.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged$: Observable<boolean>;

  constructor(private store: Store<{ count: number }>) {
    this.isLogged$ = store.select(selectIsPlayerLogged);
  }

  ngOnInit(): void {}

  logOut() {
    this.store.dispatch(PlayerActions.logOut());
  }
}
