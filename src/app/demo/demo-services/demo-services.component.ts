import { Component, OnInit } from '@angular/core';

import { GatewayService } from '../../services/gateway.service'
import {WeatherForecast} from '../models/weather-forecast'

@Component({
  selector: 'app-demo-services',
  templateUrl: './demo-services.component.html',
  styleUrls: ['./demo-services.component.scss']
})
export class DemoServicesComponent implements OnInit {

  weatherData: WeatherForecast;
  constructor(private gatewayService: GatewayService) { }
  
  ngOnInit(): void {
    this.gatewayService.getWeatherTestData().subscribe( data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

}
