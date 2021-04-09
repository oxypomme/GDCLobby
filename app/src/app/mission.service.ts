import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Mission } from './mission';
import { environment } from '../environments/environment';
import { Role } from './role';
import { JWToken } from './store/player/player.reducer';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missionsUrl = `http://${environment.apiHost}/missions`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.missionsUrl).pipe(
      tap((_) => this.log('fetched missions')),
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
      tap((_) => this.log(`updated mission id=${mission.id}`)),
      catchError(this.handleError<any>('updateMission'))
    );
  }

  getRole(missId: number, roleId: number): Observable<any> {
    const url = `${this.missionsUrl}/${missId}/roles/${roleId}`;
    return this.http.get<Mission>(url).pipe(
      tap((_) => this.log(`fetched mission mss=${missId} id=${roleId}`)),
      catchError(
        this.handleError<Mission>(`getRole mss=${missId} id=${roleId}`)
      )
    );
  }

  createRole(
    missId: number,
    role: Partial<Role>,
    { accessToken }: JWToken
  ): Observable<Role> {
    const url = `${this.missionsUrl}/${missId}/roles`;
    console.log(role);

    return this.http
      .post<Role>(url, role, {
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .pipe(
        tap((_) => this.log(`fetched mission mss=${missId}`)),
        catchError(this.handleError<Role>(`getRole mss=${missId}`))
      );
  }

  updateRole(
    id: number,
    role: Partial<Role>,
    { accessToken }: JWToken
  ): Observable<any> {
    const url = `${this.missionsUrl}/${id}/roles/${role.id}`;
    return this.http
      .patch(url, role, {
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .pipe(
        tap((_) => this.log(`updated role mss=${id} id=${role.id}`)),
        catchError(this.handleError<any>(`updateRole mss=${id} id=${role.id}`))
      );
  }

  deleteRole(
    id: number,
    roleid: number,
    { accessToken }: JWToken
  ): Observable<any> {
    const url = `${this.missionsUrl}/${id}/roles/${roleid}`;
    return this.http
      .delete(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .pipe(
        tap((_) => this.log(`deleted role mss=${id} id=${roleid}`)),
        catchError(this.handleError<any>(`deleteRole mss=${id} id=${roleid}`))
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
