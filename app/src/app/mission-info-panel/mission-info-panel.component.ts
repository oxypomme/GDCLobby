import { Component, Input, OnInit } from '@angular/core';
import dayjs from 'dayjs';
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
      this.getRemainingTime();
    }, 1000);
  }

  getRemainingTime() {
    const dur = dayjs.duration(dayjs(this.mission?.date).diff(dayjs()));

    this.remainingTime = `
    ${Math.round(dur.asDays())}j
     ${dur.hours() - 2}h 
     ${dur.minutes()}m 
     ${dur.seconds()}s`;
  }

  getEndRegister(): Date {
    return dayjs(this.mission.date).subtract(7, 'd').toDate();
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
