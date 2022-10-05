import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LigaClubs } from "./liga-clubs.reducer";
import * as LigaSelectors from "../_store/liga-clubs.selectors";
import * as LigaActions from "../_store/liga-clubs.actions";
import { Team } from "../_interfaces/Team";
import { Player } from "../_interfaces/Player";
@Injectable()
export class LigaClubsFacade {
  teams$: Observable<Team[]> = this.store.select(LigaSelectors.getAllLigaTeams);

  isLoading$: Observable<boolean> = this.store.select(LigaSelectors.isLoading);
  messageError$: Observable<string> = this.store.select(
    LigaSelectors.getTeamsFailure
  );
  selectedTeam$: Observable<Team> = this.store.select(
    LigaSelectors.getSelectedTeam
  );

  selectedTeamPlayers: Observable<any> = this.store.select(
    LigaSelectors.selectedPlayerByTeam
  );
  messageErrorPlayers$: Observable<string> = this.store.select(
    LigaSelectors.selectedPlayerByTeamFailure
  );

  selectedPlayer: Observable<Player> = this.store.select(
    LigaSelectors.setPlayer
  );

  constructor(private store: Store<LigaClubs>) {}

  loadLigaClubsData(): void {
    this.store.dispatch(LigaActions.getTeams());
  }
}
