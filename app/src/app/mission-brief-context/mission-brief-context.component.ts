import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-brief-context',
  templateUrl: './mission-brief-context.component.html',
  styleUrls: ['./mission-brief-context.component.css'],
})
export class MissionBriefContextComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      document.querySelector('#' + fragment).scrollIntoView();
    });
  }
}
