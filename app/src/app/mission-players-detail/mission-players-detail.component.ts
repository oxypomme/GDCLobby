import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../mission.service';
import { Role } from '../role';

@Component({
  selector: 'app-mission-players-detail',
  templateUrl: './mission-players-detail.component.html',
  styleUrls: ['./mission-players-detail.component.css'],
})
export class MissionPlayersDetailComponent implements OnInit {
  @Input() role?: Role;

  constructor(
    private route: ActivatedRoute,
    private missionService: MissionService
  ) {}

  ngOnInit(): void {
    this.getMission();
  }

  getMission() {
    const missId = 1;
    const roleId = +this.route.snapshot.paramMap.get('id');
    this.missionService.getRole(missId, roleId).subscribe({
      next: (role) => (this.role = role),
    });
  }
}
