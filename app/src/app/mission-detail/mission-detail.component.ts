import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { Store } from '@ngrx/store';
import { selectMissionObj } from '../store/mission/mission.selectors';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css'],
})
export class MissionDetailComponent implements OnInit {
  @Input() mission?: Mission;

  constructor(private store: Store) {
    this.store
      .select(selectMissionObj)
      .subscribe((mission) => (this.mission = mission));
  }

  ngOnInit(): void {}
}
