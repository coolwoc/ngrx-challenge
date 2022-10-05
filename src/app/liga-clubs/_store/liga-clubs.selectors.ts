import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LigaClubs } from './liga-clubs.reducer';


const getLigaClubsState = createFeatureSelector<LigaClubs>('LigaClubs');

export const isLoading = createSelector(
    getLigaClubsState,
    state => state.isLoading
)

export const getAllLigaTeams = createSelector(
    getLigaClubsState,
    state => state.teams
)

export const getTeamsFailure = createSelector(
    getLigaClubsState,
    state => state.messageError
)

export const getSelectedTeam = createSelector(
    getLigaClubsState,
    state => state.selectedTeam
)

export const selectedPlayerByTeam = createSelector(
    getLigaClubsState,
    state => state.selectedTeamPlayers
)

export const selectedPlayerByTeamFailure = createSelector(
    getLigaClubsState,
    state => state.messageError
)

export const setPlayer = createSelector(
    getLigaClubsState,
    state => state.selectedPlayer
)

export const setPlayerSuccess = createSelector(
    getLigaClubsState,
    state => state.messageError
)