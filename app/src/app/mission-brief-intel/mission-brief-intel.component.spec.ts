import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBriefIntelComponent } from './mission-brief-intel.component';

describe('MissionBriefIntelComponent', () => {
  let component: MissionBriefIntelComponent;
  let fixture: ComponentFixture<MissionBriefIntelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionBriefIntelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionBriefIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
