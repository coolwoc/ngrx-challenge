import { Observable, of } from "rxjs";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LigaClubsEffects } from "./liga-clubs.effects";
import { LigaClubs } from "./liga-clubs.reducer";
import { clubActions } from "./liga-clubs.action-types";
import { TeamsService } from "../_service/teams.service";
import { TestBed } from "@angular/core/testing";
import { doesNotMatch } from "assert";

const initialState = {
  teams: [],
  selectedTeam: null,
  selectedTeamPlayers: [],
  selectedPlayer: null,
  messageError: "",
  isLoading: false,
};

const MOCKED_TEAMS_RESPONSE = [
  { id: 48, name: "Alavés" },
  { id: 1, name: "Athletic" },
];

const MOCKED_PLAYERS_RESPONSE = [
  {
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
  },
  {
    avg: 8.2,
    clause: 69825000,
    fav: 1,
    id_competition: 1,
    id_comunio: 1927,
    id_team: 20,
    id_uc: 1191943,
    last_modified: "2020-10-07 05:07:06",
    match_info: {},
    name: "Gerard Moreno",
    picture: "https://d1.gomister.com/img/players/476.png",
    points: 41,
    position: 4,
    prev_value: 16713000,
    shield: 0,
    status: null,
    streak: {},
    ts_pic: 1571127522,
    value: 16768000,
  },
];

class MockTeamsService {
  fetchUsers() {
    return of(MOCKED_TEAMS_RESPONSE);
  }
}

describe("LigaClubEffects", () => {
  let effects: LigaClubsEffects;
  let actions$: Observable<any>;
  let store: MockStore<LigaClubs>;
  let httpService: TeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LigaClubsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: TeamsService, userClass: MockTeamsService },
      ],
    });

    effects = TestBed.inject(LigaClubsEffects);
    store = TestBed.inject(MockStore);
    httpService = TestBed.inject(TeamsService);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });

  describe("getAllTeamsRequested$", () => {
    it("should get all Teams", () => {
      const spy = spyOn(httpService, "getAllTeams").and.callThrough();
      actions$ = of(clubActions.getTeams);
      effects.getAllTeamsRequested$.subscribe((res) => {
        expect(res).toEqual(
          clubActions.getTeamsSuccess({ teams: MOCKED_TEAMS_RESPONSE })
        );
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("getAllPlayerByTeam", () => {
    it("should get all players by Team", () => {
      const spy = spyOn(httpService, "getPlayersByTeamId").and.callThrough();
      actions$ = of(clubActions.getPlayersByTeam);
      effects.getAllPlayersByTeam$.subscribe((res) => {
        expect(res).toEqual(
          clubActions.getPlayersByTeamSuccess({
            selectedTeamPlayers: MOCKED_PLAYERS_RESPONSE,
          })
        );
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
