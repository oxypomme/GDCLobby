import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Player } from './player';
import { environment } from '../environments/environment.prod';
import { catchError, tap } from 'rxjs/operators';
import { Creditentials } from './store/player/creditentials';
import { JWToken } from './store/player/player.reducer';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService extends BaseService {
  private playerUrl = `http://${environment.apiHost}/player`;
  private authUrl = `http://${environment.apiHost}/auth`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    super();
  }

  logIn({ username, password }: Creditentials): Observable<any> {
    const url = `${this.authUrl}/login`;
    return this.http
      .post(
        url,
        {
          username,
          password,
        },
        this.httpOptions
      )
      .pipe(
        tap(
          (_) => this.log('try logging in'),
          catchError(this.handleError<any>('logIn'))
        )
      );
  }

  register({ username, password }: Creditentials): Observable<Player> {
    const url = `${this.authUrl}/register`;
    return this.http
      .post<Player>(
        url,
        {
          username,
          password,
        },
        this.httpOptions
      )
      .pipe(
        tap(
          (_) => this.log('try registering'),
          catchError(this.handleError<Player>('register'))
        )
      );
  }

  update(
    { username, password }: Creditentials,
    { accessToken }: JWToken
  ): Observable<Player> {
    return this.http
      .patch<Player>(
        this.playerUrl,
        {
          username,
          password,
        },
        {
          headers: {
            ContentType: 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .pipe(
        tap(
          (_) => this.log('try updating'),
          catchError(this.handleError<Player>('update'))
        )
      );
  }

  delete({ accessToken }: JWToken): Observable<Player> {
    return this.http
      .delete<Player>(this.playerUrl, {
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .pipe(
        tap(
          (_) => this.log('try deleting'),
          catchError(this.handleError<Player>('delete'))
        )
      );
  }

  fetch({ accessToken }: JWToken): Observable<Player> {
    return this.http
      .get<Player>(this.playerUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .pipe(
        tap((_) => this.log('fetched player')),
        catchError(this.handleError<Player>('fetchPlayer'))
      );
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerUrl + 's').pipe(
      tap((_) => this.log('fecthed player list')),
      catchError(this.handleError<Player[]>('fetch player list'))
    );
  }
}
