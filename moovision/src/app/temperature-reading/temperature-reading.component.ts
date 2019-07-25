import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../services/temperature.service';
import { HttpClient } from 'selenium-webdriver/http';
import {Moment } from 'moment';

@Component({
  selector: 'app-temperature-reading',
  templateUrl: './temperature-reading.component.html',
  styleUrls: ['./temperature-reading.component.css']
})
export class TemperatureReadingComponent implements OnInit {
  temperature = 0;
  response = null;
  i = 0;

  constructor(private temperatureService:TemperatureService) { 
  }

  getTime() {
    setInterval(() => {
      console.log(this.i); 
      this.getTemp(this.i++);
    }, 1000);
  }

  convertCtoF(celcius) {
    return ((celcius * 9/5) + 32);
  }

  getTemp(x=0) {
    this.temperatureService.callTemp()
      .subscribe((data: String) => {
        let raw = {temp: data['properties']};
        this.temperature = this.convertCtoF(raw.temp.apparentTemperature.values[x]['value']);
        return this.response;
      });
  }

  ngOnInit() {
    this.getTime();
  }

}
