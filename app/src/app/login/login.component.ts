import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import PlayerActions from '../store/player/player.actions';
import { selectIsPlayerLogged } from '../store/player/player.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLogged$: Observable<boolean>;

  constructor(private store: Store<{ count: number }>, private router: Router) {
    this.isLogged$ = store.select(selectIsPlayerLogged);
  }

  ngOnInit(): void {
    this.isLogged$.subscribe((isLogged: boolean) => {
      if (isLogged) this.router.navigate(['/']);
    });
  }

  logIn() {
    this.store.dispatch(
      PlayerActions.logIn.request({
        credentials: { username: this.username, password: this.password },
      })
    );
  }
}
