import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import {WeatherForecast} from '../demo/models/weather-forecast'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  apiUrl: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getWeatherTestData(): Observable<WeatherForecast> {
    return this.http.get<WeatherForecast>(`${this.apiUrl}`).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
  }
}
