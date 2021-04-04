import { Component, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css'],
})
export class MissionsComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.missionService
      .getMissions()
      .subscribe((missions) => (this.missions = missions));
  }
}
