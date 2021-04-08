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

  remainingTime: string;

  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.getMission();

    setInterval(() => {
      const time = new Date(this.mission.date).valueOf() - new Date().valueOf();

      this.remainingTime = `
      ${Math.round(time / (1000 * 60 * 60 * 24))}j
       ${Math.round((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h 
       ${Math.round((time % (1000 * 60 * 60)) / (1000 * 60))}m 
       ${Math.round((time % (1000 * 60)) / 1000)}s`;
    }, 1000);
  }

  getMission(): void {
    const id = 1;
    this.missionService
      .getMission(id)
      .subscribe((mission) => (this.mission = mission));
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
