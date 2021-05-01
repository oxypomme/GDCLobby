import { PlayerEffects } from './player/player.effects';
import { PlayerHydrationEffects } from './player/hydration/hydration.effects';
import { playerReducer } from './player/player.reducer';

import { MissionEffects } from './mission/mission.effects';
import { missionReducer } from './mission/mission.reducer';

export const store = {
  player: playerReducer,
  mission: missionReducer,
};

export const effects = [PlayerEffects, PlayerHydrationEffects, MissionEffects];
