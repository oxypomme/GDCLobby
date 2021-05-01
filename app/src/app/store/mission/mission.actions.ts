import { createAction, props } from '@ngrx/store';
import { Mission } from 'src/app/mission';

export default {
    fetch: {
        request: createAction(
            '[Mission Component] Fetch Requested',
            props<{missionId: number}>()
        ),
        success: createAction(
            '[Mission Component] Fetch Success',
            props<{mission: Mission}>()
        )
    },

    failed: createAction('[Mission Component] Failed', props<{ err: unknown }>()),
}