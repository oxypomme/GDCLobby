import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Role } from '../role';

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

  calcRemainingTime(): Date {
    const time = new Date(this.mission.date).getTime() - new Date().getTime();
    return time > 0 ? new Date(time) : null;
  }

  evalCondition(role: Role): Function {
    return Function(`"use strict";return ${role.condition}`)();
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

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.missionService
      .updateMission(this.mission)
      .subscribe(() => this.goBack());
  }
}
