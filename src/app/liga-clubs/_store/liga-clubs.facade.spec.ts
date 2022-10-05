import { TestBed } from "@angular/core/testing";
import { StoreModule } from '@ngrx/store';
import { of } from "rxjs";
import { TeamsService } from "../_service/teams.service";
import { LigaClubsFacade } from "./liga-clubs.facade";
import * as fromLigaClubs from '../_store/liga-clubs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LigaClubsEffects } from './liga-clubs.effects';

describe("LigaClubsFacade", () => {
  let facade: LigaClubsFacade;
  let teamsService: jasmine.SpyObj<TeamsService>;

  beforeEach(() => {
    const teamsServiceSpy = jasmine.createSpyObj<TeamsService>("TeamsService", {
      getAllTeams: of([]),
      getPlayersByTeamId: of([]),
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromLigaClubs.featureName, fromLigaClubs.ligaClubsReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([LigaClubsEffects])
      ],
      providers: [
        LigaClubsFacade,
        { provide: TeamsService, useValue: teamsServiceSpy },
      ],
    });

    facade = TestBed.inject(LigaClubsFacade);
    teamsService = TestBed.inject(
      TeamsService
    ) as jasmine.SpyObj<TeamsService>;
  });

  it('shoud be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('getAllTeams', () => {
    it('shoud return all Teams', () => {
        teamsService.getAllTeams();
        expect(teamsService.getAllTeams()).not.toBeNull();
    });
  })
});
