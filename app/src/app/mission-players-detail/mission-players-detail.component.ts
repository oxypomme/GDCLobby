import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { toast } from 'bulma-toast';

import { MissionService } from '../mission.service';
import { Role } from '../role';
import { TeamsService } from '../teams.service';
import { Team } from '../team';
import {
  selectPlayerLogged,
  selectPlayerToken,
} from '../store/player/player.selectors';
import { Player } from '../player';
import { Mission } from '../mission';
import { JWToken } from '../store/player/player.reducer';

@Component({
  selector: 'app-mission-players-detail',
  templateUrl: './mission-players-detail.component.html',
  styleUrls: ['./mission-players-detail.component.css'],
})
export class MissionPlayersDetailComponent implements OnInit {
  @Input() role?: Role;

  teams: Team[];
  mission: Mission;

  name: string;
  selectedTeam: number;
  player: string;
  condition = 'true';
  isBooked = false;
  errors: string[];

  token: JWToken;

  constructor(
    private route: ActivatedRoute,
    private missionService: MissionService,
    private teamService: TeamsService,
    private location: Location,
    private store: Store
  ) {
    this.store.select(selectPlayerLogged).subscribe({
      next: (player: Player) => {
        if (!player || !player.isAdmin) this.goBack();
      },
    });
    this.store.select(selectPlayerToken).subscribe({
      next: (jwt) => (this.token = jwt),
    });
  }

  ngOnInit(): void {
    this.getMission();
    this.getRoles();
    this.getTeams();
  }

  getMission() {
    const missId = 1;
    this.missionService.getMission(missId).subscribe({
      next: (mission: Mission) => (this.mission = mission),
    });
  }

  getRoles() {
    const missId = 1;
    const roleId = +this.route.snapshot.paramMap.get('id');
    if (roleId > 0)
      this.missionService.getRole(missId, roleId).subscribe({
        next: (role: Role) => {
          if (role) {
            this.role = role;
            this.selectedTeam = role.team?.id;
            this.name = role.name;
            this.condition = role.condition;
            this.isBooked = role.isBooked;
          }
        },
      });
  }

  getTeams() {
    this.teamService.getTeams().subscribe({
      next: (teams: Team[]) => (this.teams = teams),
    });
  }

  goBack() {
    this.location.back();
  }

  del() {
    const missId = 1;
    const roleId = +this.route.snapshot.paramMap.get('id');
    this.missionService.deleteRole(missId, roleId, this.token).subscribe({
      next: () => {
        toast({ message: 'Rôle supprimé' });
        this.goBack();
      },
    });
  }

  validate() {
    this.errors = [];
    if (!this.name || this.name.trim().length === 0 || this.name.length > 255) {
      this.errors.push('name');
    }
    if (!this.selectedTeam || this.selectedTeam < 1) {
      this.errors.push('team');
    }
    if (!this.condition || this.condition.trim().length === 0) {
      this.errors.push('condition');
    }
    if (this.errors.length > 0) {
      return;
    }

    const missId = 1;
    const roleId = +this.route.snapshot.paramMap.get('id');
    if (this.role) {
      this.missionService
        .updateRole(
          missId,
          {
            id: roleId,
            name: this.name.trim(),
            isBooked: this.isBooked,
            condition: this.condition.trim(),
            team: this.teams.find((t) => t.id === +this.selectedTeam),
          },
          this.token
        )
        .subscribe({
          next: (role) => {
            if (role) toast({ message: 'Rôle édité' });
            else {
              toast({ message: 'Une erreur est survenue', type: 'is-danger' });
              return;
            }
            this.goBack();
          },
        });
    } else {
      this.missionService
        .createRole(
          missId,
          {
            name: this.name.trim(),
            isBooked: this.isBooked,
            condition: this.condition.trim(),
            mission: this.mission,
            team: this.teams.find((t) => t.id === +this.selectedTeam),
          },
          this.token
        )
        .subscribe({
          next: (role) => {
            if (role) toast({ message: 'Rôle créé' });
            else {
              toast({ message: 'Une erreur est survenue', type: 'is-danger' });
              return;
            }
            this.name = '';
            this.selectedTeam = -1;
            this.condition = 'true';
            this.isBooked = false;
          },
        });
    }
  }
}
