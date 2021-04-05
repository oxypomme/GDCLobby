import { createReducer, on } from '@ngrx/store';
import PlayerActions from './player.actions';

export interface JWToken {
  accessToken: string;
  expiresIn: string;
}

export interface PlayerState {
  jwt?: JWToken;
  err?: unknown;
  isLoading: boolean;
}

export const initialState: PlayerState = {
  isLoading: false,
};

const _playerReducer = createReducer(
  initialState,
  on(PlayerActions.register, (state) => {
    console.log('registered dummy');
    return state;
  }),

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

  on(PlayerActions.logOut, (state) => ({
    ...state,
    jwt: undefined,
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
