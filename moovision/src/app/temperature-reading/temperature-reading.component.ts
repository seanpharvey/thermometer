import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../services/temperature.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-temperature-reading',
  templateUrl: './temperature-reading.component.html',
  styleUrls: ['./temperature-reading.component.css']
})
export class TemperatureReadingComponent implements OnInit {
  temperature = null;
  response = null;
  x = 0;

  constructor(private temperatureService:TemperatureService) { 
  }

  private getWeather() {
    this.temperatureService.pollWeather()
    .subscribe(data => {
      this.temperature = this.convertTemp(data['properties'].apparentTemperature.values[0].value);
    });
  }

  convertTemp(celcius) {
    console.log("celcius", celcius);
    return ((celcius * 9/5) + 32);
}

  ngOnInit() {
    this.getWeather();  
  }

}
