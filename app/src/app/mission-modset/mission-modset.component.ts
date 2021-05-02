import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mission-modset',
  templateUrl: './mission-modset.component.html',
  styleUrls: ['./mission-modset.component.css'],
})
export class MissionModsetComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle(`Modset | ${environment.title}`);
  }

  ngOnInit(): void {}
}
