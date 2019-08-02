import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Moment } from "moment";

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

    getCurrentWeather() {
        let now = Moment.now();
        console.log(now);
    }

    pollWeather(seconds=10000){
        return interval(seconds)
        .pipe(mergeMap(
            () => this.requestWeatherData(), 
            () => this.getCurrentWeather()
        ));
    }
}
