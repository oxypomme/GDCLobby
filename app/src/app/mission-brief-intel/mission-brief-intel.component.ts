import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-brief-intel',
  templateUrl: './mission-brief-intel.component.html',
  styleUrls: ['./mission-brief-intel.component.css'],
})
export class MissionBriefIntelComponent implements OnInit {
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

  getRemainingTime() {
    const time = new Date(this.mission?.date).valueOf() - new Date().valueOf();
    return time > 0
      ? {
          days: Math.round(time / (1000 * 60 * 60 * 24)),
          hours: Math.round((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.round((time % (1000 * 60 * 60)) / (1000 * 60)),
        }
      : null;
  }
}
