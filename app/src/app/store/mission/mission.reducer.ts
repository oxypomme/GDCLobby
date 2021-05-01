import { createReducer, on } from '@ngrx/store';
import { toast } from 'bulma-toast';

import { Mission } from 'src/app/mission';
import MissionActions from './mission.actions';

export interface MissionState {
    mission?: Mission;
    err?: unknown;
    isLoading: boolean,
}

export const initialState: MissionState = {
    isLoading: false,
}

const _missionReducer = createReducer(
    initialState,
    on(MissionActions.fetch.request, (state) => ({
        ...state,
        err: undefined,
        isLoading: true,
    })),
    on(MissionActions.fetch.success, (state, {mission}) => ({
        ...state,
        isLoading: false,
        mission
    })),

    on(MissionActions.failed, (state, {err}) => {
        toast({ message: `Une erreur est survenue: ${err}`, type: 'is-danger' });
        return {
            ...state,
            err,
            isLoading: false,
        }
    })
);

export const missionReducer = (state, action) => {
    return _missionReducer(state, action);
}