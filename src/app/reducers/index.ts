import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTeams from '../liga-clubs/_store/liga-clubs.reducer';


export interface AppState {
    teams: fromTeams.LigaClubs;
}

export const reducers: ActionReducerMap<AppState> = {
    teams: fromTeams.ligaClubsReducer
}

// export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
//     return function(state, action) {
//       console.log('state', state);
//       console.log('action', action);
  
//       return reducer(state, action);
//     };
// }

export const metaReducers: MetaReducer<AppState>[] =
    !environment.production ? [] : [];

export const allTeamsState = createFeatureSelector<fromTeams.LigaClubs>('teams');

export const getTeams = createSelector (
    allTeamsState,
    fromTeams.getLigaClub

)