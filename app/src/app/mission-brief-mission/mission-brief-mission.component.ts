import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mission-brief-mission',
  templateUrl: './mission-brief-mission.component.html',
  styleUrls: ['./mission-brief-mission.component.css'],
})
export class MissionBriefMissionComponent implements OnInit {
  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle(`Mission | ${environment.title}`);
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      document.querySelector('#' + fragment)?.scrollIntoView();
    });
  }
}
