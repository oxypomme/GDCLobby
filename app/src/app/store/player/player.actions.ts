import { createAction, props } from '@ngrx/store';

import { Creditentials } from './creditentials';
import { JWToken } from './player.reducer';

export default {
  register: createAction(
    '[Player Component] Register Requested',
    props<{ credentials: Creditentials }>()
  ),

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

  logOut: createAction('[Player Component] LogOut'),

  failed: createAction('[Player Component] Failed', props<{ err: unknown }>()),
};
