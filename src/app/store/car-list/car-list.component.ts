import { Component, OnInit } from '@angular/core';
import { Car } from './../../models/car.model';

import { CarService } from './../car.service';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<Car>;

  constructor(
    private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

}
