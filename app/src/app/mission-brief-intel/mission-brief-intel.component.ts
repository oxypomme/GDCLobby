import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import dayjs from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';
import { environment } from 'src/environments/environment.prod';
import { Mission } from '../mission';
import { selectMissionObj } from '../store/mission/mission.selectors';

@Component({
  selector: 'app-mission-brief-intel',
  templateUrl: './mission-brief-intel.component.html',
  styleUrls: ['./mission-brief-intel.component.css'],
})
export class MissionBriefIntelComponent implements OnInit {
  @Input() mission?: Mission;

  remainingTime: Duration;

  constructor(store: Store, private titleService: Title) {
    this.titleService.setTitle(`Intel | ${environment.title}`);
    store.select(selectMissionObj).subscribe({
      next: (mission) => (this.mission = mission),
    });
  }

  ngOnInit(): void {
    this.getRemainingTime();
    setInterval(() => {
      this.getRemainingTime();
    }, 1000);
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
