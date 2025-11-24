import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    RouterOutlet,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  cities = [
  'Amsterdam',
  'Auckland',
  'Bangalore',
  'Bangkok',
  'Berlin',
  'Cape Town',
  'Chennai',
  'Chicago',
  'Delhi',
  'Dubai',
  'Hong Kong',
  'Istanbul',
  'Jakarta',
  'Kuala Lumpur',
  'London',
  'Los Angeles',
  'Madrid',
  'Melbourne',
  'Mumbai',
  'New York',
  'Paris',
  'Rome',
  'San Francisco',
  'Seoul',
  'Singapore',
  'Sydney',
  'Tokyo',
  'Toronto',
  'Vancouver',
  'Zurich'
];

  cityControl = new FormControl();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cityControl.valueChanges.subscribe((value) => {
      if (value) {
        this.router.navigate([value]);
      }
    });
  }
}
