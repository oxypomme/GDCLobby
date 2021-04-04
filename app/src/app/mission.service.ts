import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Mission } from './mission';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missionsUrl = 'http://localhost:3000/missions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.missionsUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Mission[]>('getMissions', []))
    );
  }

  getMission(id: number): Observable<Mission> {
    const url = `${this.missionsUrl}/${id}`;
    return this.http.get<Mission>(url).pipe(
      tap((_) => this.log(`fetched mission id=${id}`)),
      catchError(this.handleError<Mission>(`getMission id=${id}`))
    );
  }

  updateMission(mission: Mission): Observable<any> {
    const url = `${this.missionsUrl}/${mission.id}`;
    return this.http.put(url, mission, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${mission.id}`)),
      catchError(this.handleError<any>('updateHero'))
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
