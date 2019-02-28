import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly urlfilm = `http://www.omdbapi.com`;
  private readonly urlimg = `http://img.omdbapi.com`;

  constructor(private httpClient: HttpClient) { }

  omdbiFilms(search: string): Observable<any> {
    return this.httpClient
      .get<{Title: string}>(
        `${this.urlfilm}/?s=${search}&apikey=5f2b70a7`)
      .pipe(
        catchError(this._huandleError));
  }
  getFilmsById(id) {
    return this.httpClient
      .get((`${this.urlfilm}/?i=${id}&apikey=5f2b70a7&plot=full`));
  }
  // omdbiImg(search: any): Observable<any> {
  //   return this.httpClient
  //     .get<{Poster: string}>(
  //       `${this.urlimg}/?s=${search}&apikey=5f2b70a7`)
  //     .pipe(
  //       catchError(this._handleError));
  // }

  private _handleError(err: HttpErrorResponse) {
    return throwError(err.error);
  }
}
