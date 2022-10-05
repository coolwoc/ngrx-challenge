import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Team } from "../_interfaces/Team";

const API_TEAMS: string = environment.apiURL + `${"/api/teams"}`;
const API_PLAYERS: string = environment.apiURL + `${"/api/players"}`;

@Injectable()
export class TeamsService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json;charset=UTF-8;",
    }),
  };

  constructor(public http: HttpClient) {}

  getAllTeams(): Observable<any> | any {
    return this.http.get<Team[]>(API_TEAMS, this.httpOptions).pipe(
      map((res: Team[]) => res),
      catchError(this.errorHandler(Error))
    );
  }

  getPlayersByTeamId(team: Team): Observable<any> | any {
    return this.http.get<any>(API_PLAYERS, this.httpOptions).pipe(
      map((res: any[]) => {
        const dataPlayers = res.filter((player) => player.id_team === team.id);
        return dataPlayers;
      }),
      catchError(this.errorHandler(Error))
    );
  }

  errorHandler(error: any): any {
    return throwError(() => new Error(error));
  }
}
