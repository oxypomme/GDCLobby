import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-info-panel',
  templateUrl: './mission-info-panel.component.html',
  styleUrls: ['./mission-info-panel.component.css'],
})
export class MissionInfoPanelComponent implements OnInit {
  @Input() mission?: Mission;

  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.getMission();
  }

  getMission(): void {
    const id = 1;
    this.missionService
      .getMission(id)
      .subscribe((mission) => (this.mission = mission));
  }

  calcRemainingTime(): Date {
    const time = new Date(this.mission.date).getTime() - new Date().getTime();
    return time > 0 ? new Date(time) : null;
  }
  calcPlayers(): number {
    return this.mission.roles?.filter((r) => r.player !== null).length;
  }
  calcFree(): number {
    return this.mission.roles?.filter((r) => r.player === null).length;
  }
  calcBooked(): number {
    return this.mission.roles?.filter((r) => r.isBooked).length;
  }
}
