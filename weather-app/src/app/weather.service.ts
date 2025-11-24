import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient);

  getWeatherForCity(cityName: string) 
  {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get(path);
  }
}
