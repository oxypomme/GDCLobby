import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Player } from './player';
import { environment } from '../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Creditentials } from './store/player/creditentials';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playerUrl = `http://${environment.apiHost}/players`;
  private authUrl = `http://${environment.apiHost}/auth`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

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

  private log(message: string): void {
    console.log(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
