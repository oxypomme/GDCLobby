import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MissionService } from '../mission.service';
import { Role } from '../role';
import { TeamsService } from '../teams.service';
import { Team } from '../team';
import { selectPlayerLogged } from '../store/player/player.selectors';
import { Player } from '../player';
import { Mission } from '../mission';

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
  condition: string;
  isBooked: boolean;

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
    this.missionService.getRole(missId, roleId).subscribe({
      next: (role: Role) => {
        if (role) {
          this.role = role;
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

  validate() {
    const missId = 1;
    if (this.role) {
    } else {
      this.missionService
        .createRole(missId, {
          name: this.name,
          isBooked: this.isBooked,
          condition: this.condition,
          mission: this.mission,
          team: this.teams.find((t) => t.id === this.selectedTeam),
        })
        .subscribe({
          next: () => console.log('created Role'),
        });
    }
    //this.goBack();
  }
}
