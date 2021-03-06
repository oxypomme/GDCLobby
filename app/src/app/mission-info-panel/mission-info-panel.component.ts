import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import dayjs from 'dayjs';
import { Mission } from '../mission';
import { selectMissionObj } from '../store/mission/mission.selectors';

@Component({
  selector: 'app-mission-info-panel',
  templateUrl: './mission-info-panel.component.html',
  styleUrls: ['./mission-info-panel.component.css'],
})
export class MissionInfoPanelComponent implements OnInit {
  @Input() mission?: Mission;

  openDate = dayjs('19/05/2021', 'DD/MM/YYYY');
  remainingTime: string;

  constructor(private store: Store) {
    this.store.select(selectMissionObj).subscribe({
      next: (mission) => (this.mission = mission),
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      this.getRemainingTime();
    }, 1000);
  }

  getRawRemainingTime() {
    const dur = dayjs.duration(
      dayjs(this.mission?.date).diff(dayjs().add(2, 'h'))
    );
    return {
      days:
        dur.asDays() >= dayjs().daysInMonth() - 1
          ? Math.floor(dur.asDays())
          : dur.days(),
      hours: dur.hours(),
      mins: dur.minutes(),
      secs: dur.seconds(),
    };
  }

  getRemainingTime() {
    const dur = this.getRawRemainingTime();
    this.remainingTime = `
     ${dur.days}j
     ${dur.hours}h
     ${dur.mins}m
     ${dur.secs}s
    `;
  }

  getEndRegister(): Date {
    return dayjs(this.mission.date).subtract(7, 'd').toDate();
  }

  dateOpen(): boolean {
    return dayjs().isAfter(this.openDate);
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
