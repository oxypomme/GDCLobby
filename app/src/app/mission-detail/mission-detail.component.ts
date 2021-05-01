import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../mission';
import { Role } from '../role';
import { Store } from '@ngrx/store';
import { selectMissionObj } from '../store/mission/mission.selectors';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css'],
})
export class MissionDetailComponent implements OnInit {
  @Input() mission?: Mission;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store,
  ) {
    this.store.select(selectMissionObj).subscribe((mission) => (this.mission = mission));
  }

  ngOnInit(): void {
  }
}
