import { createReducer, Action, on } from "@ngrx/store";
import { clubActions } from "./liga-clubs.action-types";
import { Team } from "../_interfaces/Team";

export const featureName = "LigaClubs";

export interface LigaClubs {
  teams: Team[];
  selectedTeam: Team;
  selectedTeamPlayers: any[];
  selectedPlayer: any;
  messageError: string;
  isLoading: boolean;
}

export const initialLigaClubsState: LigaClubs = {
  teams: [],
  selectedTeam: null,
  selectedTeamPlayers: [],
  selectedPlayer: null,
  messageError: "",
  isLoading: false,
};

export const ligaClubsReducer = createReducer(
  initialLigaClubsState,
  on(clubActions.getLoading, (state) => ({...state})),
  
  on(clubActions.getTeams, (state) => ({ ...state, isLoading: true })),
  on(clubActions.getTeamsSuccess, (state, action) => ({
    ...state,
    teams: action.teams,
    isLoading: false,
    messageError: "",
  })),
  on(clubActions.getTeamsFailure, (state) => ({
    ...state,
    isLoading: true,
    messageError: "Fetch of Teams has been Failure!!",
  })),

  on(clubActions.setTeam, (state) => ({ ...state, isLoading: true })),
  on(clubActions.setTeamSuccess, (state, action) => ({
    ...state,
    selectedTeam: action.selectedTeam,
    isLoading: false,
    messageError: "",
  })),
  on(clubActions.setTeamFailure, (state) => ({
    ...state,
    isLoading: true,
    messageError: "Fetch Selected Team has been Failure!!",
  })),

  on(clubActions.getPlayersByTeam, (state) => ({ ...state, isLoading: true })),
  on(clubActions.getPlayersByTeamSuccess, (state, action) => ({
    ...state,
    selectedTeamPlayers: action.selectedTeamPlayers,
    isLoading: false,
    messageError: "",
  })),
  on(clubActions.getPlayersByTeamFailure, (state) => ({
    ...state,
    isLoading: true,
    messageError: "Fetch Players by Team has been Failure!!",
  })),

  on(clubActions.setPLayer, (state) => ({
    ...state,
    isLoading: false
  })),
  on(clubActions.setPlayerSuccess, (state, action)  => (
    {
      ...state,
      selectedPlayer: action.selectedPlayer,
      isLoading: false,
      messageError: ''
    }
  )),
);

export function reducer(state: LigaClubs | undefined, action: Action): any {
  return ligaClubsReducer(state, action);
}

export const getLigaClub = (state: LigaClubs) => {
  return {
    teams: state.teams,
    selectedTeam: state.selectedTeam,
    selectedTeamPlayers: state.selectedTeamPlayers,
    selectedPlayer: state.selectedPlayer,
    isLoading: state.isLoading,
    messageError: state.messageError,
  };
};
