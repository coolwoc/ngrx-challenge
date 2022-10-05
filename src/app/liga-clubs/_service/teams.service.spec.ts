import { getTestBed, TestBed } from "@angular/core/testing";
import { TeamsService } from "./teams.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

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
];

const PLAYER_ID = {
  id: 1,
  name: "name",
};

describe("Teams Service", () => {
  let service: TeamsService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamsService],
    });
    injector = getTestBed();
    service = injector.inject(TeamsService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getAllTeams", () => {
    it("should return all teams", () => {
      service.getAllTeams().subscribe();
      const reqMock = httpMock.expectOne(
        (req) => req.method === "GET" && req.url === `/api/teams`
      );
      expect(reqMock.request.method).toBe("GET");
      reqMock.flush([MOCKED_TEAMS_RESPONSE]);
    });
  });

  describe("getPlayersByTeamId", () => {
    it("should return all players", () => {
      service.getPlayersByTeamId(PLAYER_ID).subscribe();
      const reqMock = httpMock.expectOne(
        (req) => req.method === "GET" && req.url === `/api/players`
      );
      expect(reqMock.request.method).toBe("GET");
      reqMock.flush([MOCKED_PLAYERS_RESPONSE]);
    });
  });
});
