import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../services/temperature.service';
import { HttpClient } from 'selenium-webdriver/http';
import {Moment } from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-temperature-reading',
  templateUrl: './temperature-reading.component.html',
  styleUrls: ['./temperature-reading.component.css']
})
export class TemperatureReadingComponent implements OnInit {
  temperature = null;
  response = null;
  i = 0;

  constructor(private temperatureService:TemperatureService) { 
  }

  private callApi(x=0) {
    let currentTemp = null;
    this.temperatureService.callWeather().subscribe(data =>{
        return data['properties'].apparentTemperature.values[x].value;
    });

    return currentTemp;
  }

  getTemp(celcius:number) {
    return ((celcius * 9/5) + 32);
}

  ngOnInit() {
    this.temperature =  this.getTemp(this.callApi());
  }

}
