import { createAction, props } from '@ngrx/store';
import { PlayerState } from '../player.reducer';

export default {
  request: createAction('[Hydration Player] Hydrate'),
  success: createAction(
    '[Hydration Player] Hydrate Success',
    props<{ player: PlayerState }>()
  ),
  failed: createAction('[Hydration Player] Hydrate Failure'),
};
