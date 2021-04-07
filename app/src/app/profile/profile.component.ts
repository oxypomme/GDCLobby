import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from '../player';
import PlayerActions from '../store/player/player.actions';
import { JWToken } from '../store/player/player.reducer';
import {
  selectPlayerLogged,
  selectPlayerToken,
} from '../store/player/player.selectors';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  playerLogged$: Observable<Player>;
  token: JWToken;
  teams: Team[];

  selectedTeam: number;
  username: string;
  password: string;

  constructor(
    private teamService: TeamsService,
    private store: Store<{ count: number }>,
    private location: Location
  ) {
    this.playerLogged$ = this.store.select(selectPlayerLogged);
    this.store.select(selectPlayerToken).subscribe({
      next: (jwt) => (this.token = jwt),
    });
  }

  ngOnInit(): void {
    this.playerLogged$.subscribe({
      next: (player) => {
        if (!player) this.location.back();
        this.username = player?.username;
        this.selectedTeam = player?.team.id;
      },
    });
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  update() {
    this.store.dispatch(
      PlayerActions.update.request({
        credentials: {
          username: this.username,
          password: this.password,
          team: this.teams.find((t) => {
            return t.id === +this.selectedTeam;
          }),
        },
        jwt: this.token,
      })
    );
  }

  del() {
    this.store.dispatch(
      PlayerActions.delete.request({
        jwt: this.token,
      })
    );
  }
}