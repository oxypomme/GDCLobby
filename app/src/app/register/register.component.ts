import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import PlayerActions from '../store/player/player.actions';
import { selectIsPlayerLogged } from '../store/player/player.selectors';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

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

  constructor(
    private store: Store<{ count: number }>,
    private location: Location
  ) {
    this.isLogged$ = store.select(selectIsPlayerLogged);
  }

  ngOnInit(): void {
    this.isLogged$.subscribe((isLogged: boolean) => {
      if (isLogged) this.location.back();
    });
  }

  register() {
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
