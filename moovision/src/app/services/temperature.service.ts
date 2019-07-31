import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Injectable({
    providedIn: 'root'
})
export class TemperatureService {
    seconds:number = 10000;

    constructor(private http: HttpClient) {}

    callWeather(x=0): Observable<any>{
        interval(this.seconds).subscribe((n) => this.http.get('https://api.weather.gov/gridpoints/LWX/25,31'));
    }
}
