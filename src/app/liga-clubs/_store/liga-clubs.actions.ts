import { createAction, props } from "@ngrx/store";
import { Player } from "../_interfaces/Player";
import { Team } from "../_interfaces/Team";

export const GET_LOADING = "[IsLoading] Get Loading";

export const GET_ALLTEAMS = "[Teams] Get All Teams";
export const GET_ALLTEAMS_SUCCESS = "[Teams] Get All Teams Success";
export const GET_ALLTEAMS_FAILURE = "[Teams] Get All Teams Failure";

export const SET_TEAM = "[Team] Set Team";
export const SET_TEAM_SUCCESS = "[Team] Set Team Success";
export const SET_TEAM_FAILURE = "[Team] Set Team Failure";

export const GET_PLAYERS_BY_TEAM = "[Players] Get Players by Team";
export const GET_PLAYERS_BY_TEAM_SUCCESS =
  "[Players] Get Players by Team Success";
export const GET_PLAYERS_BY_TEAM_FAILURE =
  "[Players] Get Players by Team Failure";

export const GET_PLAYER = "[Player] Set Player";
export const GET_PLAYER_SUCCESS = "[Player] Set Player Success";

export const getLoading = createAction(GET_LOADING);
export const getTeams = createAction(GET_ALLTEAMS);

export const getTeamsSuccess = createAction(
  GET_ALLTEAMS_SUCCESS,
  props<{ teams: Team[] }>()
);

export const getTeamsFailure = createAction(
  GET_ALLTEAMS_FAILURE,
  props<{ messageError: string }>()
);

export const setTeam = createAction(SET_TEAM);

export const setTeamSuccess = createAction(
  SET_TEAM_SUCCESS,
  props<{ selectedTeam: Team }>()
);

export const setTeamFailure = createAction(
  SET_TEAM_FAILURE,
  props<{ messageError: string }>()
);

export const getPlayersByTeam = createAction(GET_PLAYERS_BY_TEAM);

export const getPlayersByTeamSuccess = createAction(
  GET_PLAYERS_BY_TEAM_SUCCESS,
  props<{ selectedTeamPlayers: any[] }>()
);

export const getPlayersByTeamFailure = createAction(
  GET_PLAYERS_BY_TEAM_FAILURE,
  props<{ messageError: string }>()
);

export const setPLayer = createAction(GET_PLAYER);
export const setPlayerSuccess = createAction(
  GET_PLAYER,
  props<{ selectedPlayer: Player }>()
);
