import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../auth/auth.service';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
private base_api= '/api/'
  
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private get _authHeader(): string {
    return `Bearer ${this.auth.accessToken}`;
  }

  getData$(model: string):Observable<any[]> {
    return this.http
      .get<any[]>(`${this.base_api}${model}`, {
      headers: new HttpHeaders().set('Authorization', this._authHeader)
    })
    .pipe(
      catchError((error) => this._handleError(error)) 
    )
  }
  
  getDatabyId$(model: string, id: string): Observable<any> {
    return this.http
      .get<any>(`${this.base_api}${model}/${id}`, {
      headers: new HttpHeaders().set('Authorization', this._authHeader)
    })
    .pipe(
      catchError((error) => this._handleError(error)) 
    )
  }
  
     // POST new game (admin only)
  postData$(model: string, data: any[]): Observable<any[]> {
    return this.http
      .post<any[]>(`${this.base_api}${model}`,data, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }
  
  editData$(model: string, id: string, data: any[]): Observable<any[]> {
    return this.http
      .put<any[]>(`${this.base_api}${model}/${id}`,data, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }
  



    

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return ObservableThrowError(errorMsg);
  }
  


  

}

  
  