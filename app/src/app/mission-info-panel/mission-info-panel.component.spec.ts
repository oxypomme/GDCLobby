import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionInfoPanelComponent } from './mission-info-panel.component';

describe('MissionInfoPanelComponent', () => {
  let component: MissionInfoPanelComponent;
  let fixture: ComponentFixture<MissionInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionInfoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
