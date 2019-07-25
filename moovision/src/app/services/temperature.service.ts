import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ajax } from "rxjs/ajax";



@Injectable({
    providedIn: 'root'
})
export class TemperatureService {
    constructor(private http: HttpClient) {}

    callTemp() {
        return this.http.get('https://api.weather.gov/gridpoints/LWX/25,31');
    }
}
