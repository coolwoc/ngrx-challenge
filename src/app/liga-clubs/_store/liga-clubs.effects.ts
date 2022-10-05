import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action} from "@ngrx/store";
import { Observable, of} from "rxjs";
import {
  catchError,
  map,
  mergeMap,
  switchMap
} from "rxjs/operators";
import { Player } from '../_interfaces/Player';
import { Team } from "../_interfaces/Team";
import { TeamsService } from "../_service/teams.service";
import { clubActions } from "./liga-clubs.action-types";

@Injectable()
export class LigaClubsEffects implements OnInitEffects {
  getAllTeamsRequested$ = createEffect((): Observable<any> => {
    return this.action$.pipe(
      ofType(clubActions.getTeams),
      switchMap(() =>
        this.teamsService.getAllTeams().pipe(
          map((resp: Team[]) => clubActions.getTeamsSuccess({ teams: resp })),
          catchError((error: any) =>
            of(clubActions.getTeamsFailure({ messageError: error }))
          )
        )
      )
    );
  });

  getAllPlayersByTeam$ = createEffect(
    (): Observable<any> =>
      this.action$.pipe(
        ofType(clubActions.setTeamSuccess),
        mergeMap((action) =>
          this.teamsService.getPlayersByTeamId(action.selectedTeam).pipe(
            map((resp: Player[]) =>
              clubActions.getPlayersByTeamSuccess({ selectedTeamPlayers: resp })
            ),
            catchError((error: any) =>
              of(clubActions.getTeamsFailure({ messageError: error }))
            )
          )
        )
      )
  );

  constructor(private action$: Actions, private teamsService: TeamsService) {}

  ngrxOnInitEffects(): Action {
    return clubActions.getTeams();
  }
}
