import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import PlayerActions from '../store/player/player.actions';
import { selectIsPlayerLogged } from '../store/player/player.selectors';
import { Team } from '../team';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  teams: Team[];
  selectedTeam: number;
  username: string;
  password: string;
  isLogged$: Observable<boolean>;
  errors: string[];

  constructor(
    private store: Store<{ count: number }>,
    private location: Location,
    private titleService: Title
  ) {
    this.titleService.setTitle(`Inscription | ${environment.title}`);
    this.isLogged$ = store.select(selectIsPlayerLogged);
  }

  ngOnInit(): void {
    this.isLogged$.subscribe((isLogged: boolean) => {
      if (isLogged) this.location.back();
    });
  }

  register(e: Event) {
    e.preventDefault();
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
      PlayerActions.register.request({
        credentials: {
          username: this.username,
          password: this.password,
        },
      })
    );
  }
}
