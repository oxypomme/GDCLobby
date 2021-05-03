import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import dayjs from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';
import { environment } from 'src/environments/environment.prod';
import { Mission } from '../mission';
import { selectMissionObj } from '../store/mission/mission.selectors';

@Component({
  selector: 'app-mission-brief-mission',
  templateUrl: './mission-brief-mission.component.html',
  styleUrls: ['./mission-brief-mission.component.css'],
})
export class MissionBriefMissionComponent implements OnInit {
  @Input() mission?: Mission;

  remainingTime: Duration;

  constructor(
    private route: ActivatedRoute,
    store: Store,
    private titleService: Title
  ) {
    this.titleService.setTitle(`Mission | ${environment.title}`);
    store.select(selectMissionObj).subscribe({
      next: (mission) => (this.mission = mission),
    });
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      document.querySelector('#' + fragment)?.scrollIntoView();
    });
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
