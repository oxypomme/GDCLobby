import { createSelector } from '@ngrx/store';
import { MissionState } from './mission.reducer';

export const selectMission = (state) => state.mission;

export const selectMissionObj = createSelector(
  selectMission,
  (state: MissionState) => state.mission
);
