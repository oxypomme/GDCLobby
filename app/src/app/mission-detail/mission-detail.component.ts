import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { Mission } from '../mission';
import { selectMissionObj } from '../store/mission/mission.selectors';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css'],
})
export class MissionDetailComponent implements OnInit {
  @Input() mission?: Mission;

  constructor(private store: Store, private titleService: Title) {
    this.titleService.setTitle(environment.title);
    this.store
      .select(selectMissionObj)
      .subscribe((mission) => (this.mission = mission));
  }

  ngOnInit(): void {}
}
