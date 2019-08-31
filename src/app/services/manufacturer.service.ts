import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  serverUrl = 'http://localhost/angularapi';

  constructor(private http: HttpClient) { }

  getManufacturer() {
    return this.http.get<any>(this.serverUrl + '/api/manufacturerList/').pipe(
      catchError(this.handleError)
    );
  }

  create(name: string) {
    const data = {
      name
    };

    return this.http.post<any>(this.serverUrl + '/api/manufacturerCreate', data).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    return throwError('Something bad happened. Please try again later.');
  }
}
