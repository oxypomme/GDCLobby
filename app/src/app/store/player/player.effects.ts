import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

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
          mergeMap((jwt: JWToken | null) =>
            jwt
              ? [
                  PlayerActions.logIn.success({ jwt }),
                  PlayerActions.fetch.request({ jwt }),
                ]
              : [PlayerActions.failed({ err: 'User not matching' })]
          ),
          catchError((err) => of(PlayerActions.failed({ err })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerActions.register.request),
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

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerActions.update.request),
      exhaustMap(({ credentials, jwt }) =>
        this.playerService.update(credentials, jwt).pipe(
          map((profile: Player) =>
            profile
              ? PlayerActions.update.success({ profile })
              : PlayerActions.failed({ err: 'An error occured' })
          ),
          catchError((err) => of(PlayerActions.failed({ err })))
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerActions.delete.request),
      exhaustMap(({ jwt }) =>
        this.playerService.delete(jwt).pipe(
          mergeMap((profile: any) => [
            PlayerActions.delete.success(),
            PlayerActions.logOut(),
          ]),
          catchError((err) => of(PlayerActions.failed({ err })))
        )
      )
    )
  );

  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerActions.fetch.request),
      exhaustMap(({ jwt }) =>
        this.playerService.fetch(jwt).pipe(
          map((profile: Player) =>
            profile
              ? PlayerActions.fetch.success({ profile })
              : PlayerActions.failed({ err: 'An error occured' })
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
