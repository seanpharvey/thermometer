import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TemperatureService {
    apiUrl: string = 'https://api.weather.gov/gridpoints/LWX/25,31';

    constructor(private http: HttpClient) {}

    requestWeatherData(){
        return this.http
        .get(this.apiUrl);
    }

    pollWeather(interval=10000){
        return interval(interval)
        .pipe(mergeMap(() => this.requestWeatherData()));
    }
}
