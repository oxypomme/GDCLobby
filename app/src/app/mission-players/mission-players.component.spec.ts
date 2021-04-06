import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPlayersComponent } from './mission-players.component';

describe('MissionPlayersComponent', () => {
  let component: MissionPlayersComponent;
  let fixture: ComponentFixture<MissionPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
