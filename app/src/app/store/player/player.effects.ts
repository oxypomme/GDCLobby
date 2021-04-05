import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Player } from 'src/app/player';

import { PlayerService } from 'src/app/player.service';
import PlayerActions from './player.actions';
import { JWToken } from './player.reducer';

@Injectable()
export class PlayerEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerActions.logIn.request),
      exhaustMap(({ credentials }) =>
        this.playerService.logIn(credentials).pipe(
          map((jwt: JWToken | null) =>
            jwt
              ? PlayerActions.logIn.success({ jwt })
              : PlayerActions.failed({ err: 'User not matching' })
          ),
          catchError((err) => of(PlayerActions.failed({ err })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerActions.register),
      exhaustMap(({ credentials }) =>
        this.playerService.register(credentials).pipe(
          map((profile: Player) =>
            PlayerActions.logIn.request({ credentials })
          ),
          catchError((err) => of(PlayerActions.failed({ err })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private playerService: PlayerService
  ) {}
}
