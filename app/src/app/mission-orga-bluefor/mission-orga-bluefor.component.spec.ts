import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionOrgaBlueforComponent } from './mission-orga-bluefor.component';

describe('MissionOrgaBlueforComponent', () => {
  let component: MissionOrgaBlueforComponent;
  let fixture: ComponentFixture<MissionOrgaBlueforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionOrgaBlueforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionOrgaBlueforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
