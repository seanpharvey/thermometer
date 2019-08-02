import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../services/temperature.service';
import { Temperature } from '../helpers/temperature';

@Component({
  selector: 'app-temperature-reading',
  templateUrl: './temperature-reading.component.html',
  styleUrls: ['./temperature-reading.component.css']
})
export class TemperatureReadingComponent implements OnInit {
  temperature = null;
  response = null;
  x = 0;

  constructor(
    private temperatureService:TemperatureService,
    private helper:Temperature
  ) {}

  private getWeather() {
    this.temperatureService.pollWeather(50000)
    .subscribe(data => {
      this.temperature = this.helper.convertCelToFar(data['properties'].apparentTemperature.values[0].value);
    });
  }

  ngOnInit() {
    this.getWeather();  
  }

}
