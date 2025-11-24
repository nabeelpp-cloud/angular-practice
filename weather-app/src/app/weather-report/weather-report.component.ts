import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, concatMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
})
export class WeatherReportComponent implements OnInit {
  data$!: Observable<any> | undefined;
today = new Date();
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      map((params) => params['locationName']),
      filter((name) => !!name),
      concatMap((name) => this.weatherService.getWeatherForCity(name))
    );
    this.data$.subscribe((data) => console.log(data));
  }
}
