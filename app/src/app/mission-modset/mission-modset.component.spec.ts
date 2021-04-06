import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionModsetComponent } from './mission-modset.component';

describe('MissionModsetComponent', () => {
  let component: MissionModsetComponent;
  let fixture: ComponentFixture<MissionModsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionModsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionModsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
