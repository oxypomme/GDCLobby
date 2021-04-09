import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  errors: string[];

  constructor(private store: Store, private location: Location) {
    this.isLogged$ = store.select(selectIsPlayerLogged);
  }

  ngOnInit(): void {
    this.isLogged$.subscribe((isLogged: boolean) => {
      if (isLogged) this.location.back();
    });
  }

  logIn() {
    this.errors = [];
    if (
      !this.username ||
      this.username.trim().length === 0 ||
      this.username.trim().length > 64
    ) {
      this.errors.push('username');
    }
    if (!this.password || this.password.trim().length === 0) {
      this.errors.push('password');
    }
    if (this.errors.length > 0) {
      return;
    }
    this.store.dispatch(
      PlayerActions.logIn.request({
        credentials: {
          username: this.username.trim(),
          password: this.password.trim(),
        },
      })
    );
  }
}
