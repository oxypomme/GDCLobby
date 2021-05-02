import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mission-brief-context',
  templateUrl: './mission-brief-context.component.html',
  styleUrls: ['./mission-brief-context.component.css'],
})
export class MissionBriefContextComponent implements OnInit {
  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle(`Contexte | ${environment.title}`);
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) document.querySelector('#' + fragment).scrollIntoView();
    });
  }
}
