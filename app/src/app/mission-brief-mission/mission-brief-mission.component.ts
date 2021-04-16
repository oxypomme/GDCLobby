import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-brief-mission',
  templateUrl: './mission-brief-mission.component.html',
  styleUrls: ['./mission-brief-mission.component.css'],
})
export class MissionBriefMissionComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      document.querySelector('#' + fragment)?.scrollIntoView();
    });
  }
}
