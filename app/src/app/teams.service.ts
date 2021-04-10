import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { Team } from './team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService extends BaseService {
  private teamsUrl = `http://${environment.apiHost}/teams`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    super();
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl).pipe(
      tap((_) => this.log('fetched teams')),
      catchError(this.handleError<Team[]>('getTeals', []))
    );
  }
}
