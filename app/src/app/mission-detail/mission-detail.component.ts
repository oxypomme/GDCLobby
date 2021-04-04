import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css'],
})
export class MissionDetailComponent implements OnInit {
  @Input() mission?: Mission;

  constructor(
    private route: ActivatedRoute,
    private missionService: MissionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMission();
  }

  getMission(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.missionService
      .getMission(id)
      .subscribe((mission) => (this.mission = mission));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.missionService
      .updateMission(this.mission)
      .subscribe(() => this.goBack());
  }
}
