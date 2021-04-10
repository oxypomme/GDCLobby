import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBriefContextComponent } from './mission-brief-context.component';

describe('MissionBriefContextComponent', () => {
  let component: MissionBriefContextComponent;
  let fixture: ComponentFixture<MissionBriefContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionBriefContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionBriefContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
