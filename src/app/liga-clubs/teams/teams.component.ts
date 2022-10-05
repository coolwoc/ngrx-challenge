import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { clubActions } from "../_store/liga-clubs.action-types";
import { LigaClubsFacade } from "../_store/liga-clubs.facade";
import { Team } from "../_interfaces/Team";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent implements OnInit {
  teams$: Observable<Team[]>;
  isLoading$: Observable<boolean>;
  messageError$: Observable<string>;
  selectedTeamPlayers$: Observable<any[]>;
  messageErrorPlayers$: Observable<string>;
  teamHeader: string;
  playersHeader: string;

  constructor(public store: Store, private ligaClubsFacade: LigaClubsFacade) {}

  ngOnInit() {
    this.teamHeader = 'Liga Teams';
    this.playersHeader = 'Players by Team'
    this.teams$ = this.ligaClubsFacade.teams$;
    this.isLoading$ = this.ligaClubsFacade.isLoading$;
    this.messageError$ = this.ligaClubsFacade.messageError$;
    this.selectedTeamPlayers$ = this.ligaClubsFacade.selectedTeamPlayers;
    this.messageErrorPlayers$ = this.ligaClubsFacade.messageErrorPlayers$;
    this.ligaClubsFacade.loadLigaClubsData();
  }

  handlerSelectedItem(itemTeam: any) {
    itemTeam.id
      ? this.store.dispatch(
          clubActions.setTeamSuccess({ selectedTeam: itemTeam })
        )
      : this.store.dispatch(
          clubActions.setPlayerSuccess({ selectedPlayer: itemTeam })
        );
  }
}
