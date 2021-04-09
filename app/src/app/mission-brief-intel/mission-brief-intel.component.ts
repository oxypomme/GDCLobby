import { Component, Input, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-brief-intel',
  templateUrl: './mission-brief-intel.component.html',
  styleUrls: ['./mission-brief-intel.component.css'],
})
export class MissionBriefIntelComponent implements OnInit {
  @Input() mission?: Mission;

  remainingTime: Duration;

  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.getMission();

    this.getRemainingTime();
    setInterval(() => {
      this.getRemainingTime();
    }, 1000);
  }

  getMission(): void {
    const id = 1;
    this.missionService
      .getMission(id)
      .subscribe((mission) => (this.mission = mission));
  }

  getRemainingTime() {
    if (this.mission) {
      const dur = dayjs.duration(dayjs(this.mission?.date).diff(dayjs()));
      this.remainingTime = dayjs().isBefore(this.mission?.date) ? dur : null;
    } else {
      this.remainingTime = dayjs.duration({
        days: 999,
      });
    }
  }
}
