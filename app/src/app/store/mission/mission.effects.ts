import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

import { Mission } from 'src/app/mission';
import { MissionService } from 'src/app/mission.service';
import MissionActions from './mission.actions';

@Injectable()
export class MissionEffects {

    fetch$ = createEffect(() =>
        this.actions$.pipe(
        ofType(MissionActions.fetch.request),
        exhaustMap(({ missionId }) =>
            this.missionService.getMission(missionId).pipe(
            map((mission: Mission) =>
            mission
                ? MissionActions.fetch.success({ mission })
                : MissionActions.failed({ err: 'An error occured' })
            ),
            catchError((err) => of(MissionActions.failed({ err })))
            )
        )
        )
    );

    constructor(
        private actions$: Actions,
        private missionService: MissionService
    ) {}
}