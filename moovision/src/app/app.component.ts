import { Component, NgModule } from '@angular/core';
import { TemperatureReadingComponent } from './temperature-reading/temperature-reading.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    TemperatureReadingComponent
  ]
})

export class AppComponent {
  title = 'Simple weather app';
}
