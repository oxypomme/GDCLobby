import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-orga-bluefor',
  templateUrl: './mission-orga-bluefor.component.html',
  styleUrls: ['./mission-orga-bluefor.component.css'],
})
export class MissionOrgaBlueforComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) document.querySelector('#' + fragment).scrollIntoView();
    });
  }

  isShowTopBtn(): boolean {
    return (
      document.body.scrollTop > 500 || // For Safari
      document.documentElement.scrollTop > 500 // For Chrome, Firefox, IE and Opera
    );
  }

  scrollToTop() {
    document.body.scrollTop = 370; // For Safari
    document.documentElement.scrollTop = 370; // For Chrome, Firefox, IE and Opera
  }
}
