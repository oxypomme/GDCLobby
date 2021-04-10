import { createSelector } from '@ngrx/store';
import { PlayerState } from './player.reducer';

export const selectPlayer = (state) => state.player;

export const selectIsPlayerLogged = createSelector(
  selectPlayer,
  (state: PlayerState) => !!state.jwt
);

export const selectPlayerToken = createSelector(
  selectPlayer,
  (state: PlayerState) => state.jwt
);

export const selectPlayerLogged = createSelector(
  selectPlayer,
  (state: PlayerState) => state.profile
);
