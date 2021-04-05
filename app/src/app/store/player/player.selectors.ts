import { createSelector } from '@ngrx/store';
import { PlayerState } from './player.reducer';

export const selectPlayer = (state) => state.player;

export const selectPlayerLogged = createSelector(
  selectPlayer,
  (state: PlayerState) => !!state.jwt
);
