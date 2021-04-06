import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBriefMissionComponent } from './mission-brief-mission.component';

describe('MissionBriefMissionComponent', () => {
  let component: MissionBriefMissionComponent;
  let fixture: ComponentFixture<MissionBriefMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionBriefMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionBriefMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
