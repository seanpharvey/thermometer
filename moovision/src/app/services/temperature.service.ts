import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ajax } from "rxjs/ajax";



@Injectable({
    providedIn: 'root'
})
export class TemperatureService {
    constructor(private http: HttpClient) {}

    callTemp(x=0) {
        let data = this.http.get('https://api.weather.gov/gridpoints/LWX/25,31');
        let temperature = this.getTemp(data['properties'].apparentTemperature.values[x]['value']);
        return temperature;
    }

    getTemp(celcius) {
        return ((celcius * 9/5) + 32);
    }
}
