import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { PlayerState } from '../player.reducer';
import HydrationPlayerActions from './hydration.actions';

@Injectable()
export class PlayerHydrationEffects implements OnInitEffects {
  hydrate$ = createEffect(() =>
    this.action$.pipe(
      ofType(HydrationPlayerActions.request),
      map(() => {
        const storageValue = localStorage.getItem('state');
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            if (state.player.lastLogin) {
              const time =
                (new Date().valueOf() -
                  new Date(state.player.lastLogin).valueOf()) /
                36e5;
              if (time > 2) return HydrationPlayerActions.failed();
            }
            return HydrationPlayerActions.success(state);
          } catch {
            localStorage.removeItem('state');
          }
        }
        return HydrationPlayerActions.failed();
      })
    )
  );

  serialize$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(HydrationPlayerActions.success, HydrationPlayerActions.failed),
        switchMap(() => this.store),
        distinctUntilChanged(),
        tap((state) => localStorage.setItem('state', JSON.stringify(state)))
      );
    },
    { dispatch: false }
  );

  constructor(private action$: Actions, private store: Store<PlayerState>) {}

  ngrxOnInitEffects(): Action {
    return HydrationPlayerActions.request();
  }
}
