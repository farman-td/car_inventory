import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  serverUrl = 'http://localhost/angularapi';

  constructor(private http: HttpClient) { }

  getModels() {
    return this.http.get<any>(this.serverUrl + '/api/modelList/').pipe(
      catchError(this.handleError)
    );
  }

  create(model) {
    const data = {
      carName: model.name,
      manufacturerId: model.manufacturerId,
    };

    return this.http.post<any>(this.serverUrl + '/api/modelCreate', data).pipe(
      catchError(this.handleError)
    );
  }

  sellCar(id: number) {
    const data = {
      modelId: id
    };

    return this.http.post<any>(this.serverUrl + '/api/sellCar', data).pipe(
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
