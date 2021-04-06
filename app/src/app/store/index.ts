import { PlayerEffects } from './player/player.effects';
import { PlayerHydrationEffects } from './player/hydration/hydration.effects';
import { playerReducer } from './player/player.reducer';

export const store = {
  player: playerReducer,
};

export const effects = [PlayerEffects, PlayerHydrationEffects];
