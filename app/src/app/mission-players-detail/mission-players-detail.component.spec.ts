import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPlayersDetailComponent } from './mission-players-detail.component';

describe('MissionPlayersDetailComponent', () => {
  let component: MissionPlayersDetailComponent;
  let fixture: ComponentFixture<MissionPlayersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionPlayersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPlayersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
