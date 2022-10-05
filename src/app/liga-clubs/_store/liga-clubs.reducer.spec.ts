import { Player } from "../_interfaces/Player";
import { Team } from "../_interfaces/Team";
import { clubActions } from "./liga-clubs.action-types";
import * as fromLigaClubs from "./liga-clubs.reducer";

describe("LigaClubReducer", () => {
  it("[Teams] Get All Teams", () => {
    const action = clubActions.getTeams();
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      isLoading: true,
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
    expect(result).toEqual(expectedState);
  });
  it("[Teams] Get All Teams Success", () => {
    const team: Team = { id: 1, name: "name" };
    const teams = [team];

    const action = clubActions.getTeamsSuccess({ teams });

    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      teams: teams,
      messageError: "",
    };

    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );

    expect(result).toEqual(expectedState);
  });
  it("[Teams] Get All Teams Failure", () => {
    const messageError = "Fetch of Teams has been Failure!!";
    const action = clubActions.getTeamsFailure({ messageError: messageError });

    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      messageError: messageError,
      isLoading: true,
    };

    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );

    expect(result).toEqual(expectedState);
  });
  it("[Team] Set Team", () => {
    const action = clubActions.setTeam();
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      isLoading: true,
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
    expect(result).toEqual(expectedState);
  });
  it("[Team] Set Team Success", () => {
    const team: { id: number; name: string } = { id: 1, name: "name" };
    const action = clubActions.setTeamSuccess({ selectedTeam: team });
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      selectedTeam: team,
      messageError: "",
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
    expect(result).toEqual(expectedState);
  });
  it("[Team] Set Team Failure", () => {
    const messageError = "Fetch Selected Team has been Failure!!";
    const action = clubActions.setTeamFailure({ messageError: messageError });
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      messageError: messageError,
      isLoading: true,
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
    expect(result).toEqual(expectedState);
  });
  it("[Players] Get Players by Team", () => {
    const action = clubActions.getPlayersByTeam();
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      isLoading: true,
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
    expect(result).toEqual(expectedState);
  });
  it("[Players] Get Players by Team Success", () => {
    const player: Player = {
      avg: 8.2,
      clause: 69825000,
      fav: 1,
      id_competition: 1,
      id_comunio: 1927,
      id_team: 20,
      id_uc: 1191943,
      last_modified: "2020-10-07 05:07:06",
      match_info: { is_home: true, rival_team_id: 19 },
      name: "Gerard Moreno",
      picture: "https://d1.gomister.com/img/players/476.png",
      points: 41,
      position: 4,
      prev_value: 16713000,
      shield: 0,
      status: null,
      streak: {
        3: {
          color: 0,
          gameweek: 3,
          id_player: 476,
          id_team: 20,
          points: 0,
        },
        4: {
          color: 3,
          gameweek: 4,
          id_player: 476,
          id_team: 20,
          points: 9,
        },
        5: {
          color: 3,
          gameweek: 5,
          id_player: 476,
          id_team: 20,
          points: 8,
        },
      },
      ts_pic: 1571127522,
      value: 16768000,
    };
    const players: Player[] = [player];
    const action = clubActions.getPlayersByTeamSuccess({
      selectedTeamPlayers: players,
    });
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      selectedPlayer: players,
      isLoading: false,
      messageError: "",
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
  });
  it("[Players] Get Players by Team Failure", () => {
    const messageError = "Fetch of Teams has been Failure!!";
    const action = clubActions.getTeamsFailure({ messageError: messageError });
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      messageError: messageError,
      isLoading: true,
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
    expect(result).toEqual(expectedState);
  });
  it("[Player] Set Player", () => {
    const action = clubActions.setPLayer();
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      selectedPlayer: undefined,
      isLoading: false,
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
    expect(result).toEqual(expectedState);
  });
  it("[Player] Set Player Success", () => {
    const player: Player = {
      avg: 8.2,
      clause: 69825000,
      fav: 1,
      id_competition: 1,
      id_comunio: 1927,
      id_team: 20,
      id_uc: 1191943,
      last_modified: "2020-10-07 05:07:06",
      match_info: { is_home: true, rival_team_id: 19 },
      name: "Gerard Moreno",
      picture: "https://d1.gomister.com/img/players/476.png",
      points: 41,
      position: 4,
      prev_value: 16713000,
      shield: 0,
      status: null,
      streak: {
        3: {
          color: 0,
          gameweek: 3,
          id_player: 476,
          id_team: 20,
          points: 0,
        },
        4: {
          color: 3,
          gameweek: 4,
          id_player: 476,
          id_team: 20,
          points: 9,
        },
        5: {
          color: 3,
          gameweek: 5,
          id_player: 476,
          id_team: 20,
          points: 8,
        },
      },
      ts_pic: 1571127522,
      value: 16768000,
    };
    const action = clubActions.setPlayerSuccess({selectedPlayer: player});
    const expectedState: fromLigaClubs.LigaClubs = {
      ...fromLigaClubs.initialLigaClubsState,
      selectedPlayer: player,
      isLoading: false,
      messageError: ""
    };
    const result = fromLigaClubs.ligaClubsReducer(
      fromLigaClubs.initialLigaClubsState,
      action
    );
    expect(result).toEqual(expectedState);
  })
});
