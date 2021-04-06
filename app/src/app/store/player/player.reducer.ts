import { createReducer, on } from '@ngrx/store';

import { Player } from 'src/app/player';
import PlayerActions from './player.actions';
import PlayerHydrationActions from './hydration/hydration.actions';

export interface JWToken {
  accessToken: string;
  expiresIn: string;
}

export interface PlayerState {
  jwt?: JWToken;
  profile?: Player;
  err?: unknown;
  isLoading: boolean;
}

export const initialState: PlayerState = {
  isLoading: false,
};

const _playerReducer = createReducer(
  initialState,
  on(PlayerHydrationActions.success, (_, { player: state }) => ({
    ...state,
  })),

  on(PlayerActions.register.request, (state) => ({
    ...state,
    err: undefined,
    isLoading: true,
  })),

  on(PlayerActions.logIn.request, (state) => ({
    ...state,
    err: undefined,
    isLoading: true,
  })),
  on(PlayerActions.logIn.success, (state, { jwt }) => ({
    ...state,
    jwt,
    isLoading: false,
  })),

  on(PlayerActions.logOut, () => initialState),

  on(PlayerActions.fetch.request, (state) => ({
    ...state,
    err: undefined,
    isLoading: true,
  })),
  on(PlayerActions.fetch.success, (state, { profile }) => ({
    ...state,
    isLoading: false,
    profile,
  })),

  on(PlayerActions.failed, (state, { err }) => ({
    ...state,
    err,
    isLoading: false,
  }))
);

export const playerReducer = (state, action) => {
  return _playerReducer(state, action);
};
