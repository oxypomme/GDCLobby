import { createAction, props } from '@ngrx/store';
import { Player } from 'src/app/player';

import { Creditentials } from './creditentials';
import { JWToken } from './player.reducer';

export default {
  register: {
    request: createAction(
      '[Player Component] Register Requested',
      props<{ credentials: Creditentials }>()
    ),
  },

  logIn: {
    request: createAction(
      '[Player Component] LogIn Requested',
      props<{ credentials: Creditentials }>()
    ),
    success: createAction(
      '[Player Component] LogIn Success',
      props<{ jwt: JWToken }>()
    ),
  },

  update: {
    request: createAction(
      '[Player Component] Update Requested',
      props<{ credentials: Creditentials; jwt: JWToken }>()
    ),
    success: createAction(
      '[Player Component] Update Success',
      props<{ profile: Player }>()
    ),
  },

  delete: {
    request: createAction(
      '[Player Component] Delete Requested',
      props<{ jwt: JWToken }>()
    ),
  },

  fetch: {
    request: createAction(
      '[Player Component] Fetch Requested',
      props<{ jwt: JWToken }>()
    ),
    success: createAction(
      '[Player Component] Fetch Success',
      props<{ profile: Player }>()
    ),
  },

  logOut: createAction('[Player Component] LogOut'),

  failed: createAction('[Player Component] Failed', props<{ err: unknown }>()),
};
