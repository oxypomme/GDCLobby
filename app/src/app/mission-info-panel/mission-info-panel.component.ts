import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import dayjs from 'dayjs';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { selectMissionObj } from '../store/mission/mission.selectors';

@Component({
  selector: 'app-mission-info-panel',
  templateUrl: './mission-info-panel.component.html',
  styleUrls: ['./mission-info-panel.component.css'],
})
export class MissionInfoPanelComponent implements OnInit {
  @Input() mission?: Mission;

  remainingTime: string;

  constructor(private missionService: MissionService, private store: Store) {
    this.store.select(selectMissionObj).subscribe({
      next: (mission) => (this.mission = mission),
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      this.getRemainingTime();
    }, 1000);
  }

  getRemainingTime() {
    const dur = dayjs.duration(
      dayjs(this.mission?.date).diff(dayjs().add(2, 'h'))
    );

    this.remainingTime = `
    ${
      dur.asDays() > dayjs().daysInMonth()
        ? Math.round(dur.asDays())
        : dur.days()
    }j
     ${dur.hours()}h 
     ${dur.minutes()}m 
     ${dur.seconds()}s`;
  }

  getEndRegister(): Date {
    return dayjs(this.mission.date).subtract(7, 'd').toDate();
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
