import { Component, OnInit } from '@angular/core';
import { Car } from './../../../models/car.model';
import { Router } from '@angular/router';

import { CarService } from './../../../services';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  private _cars: Array<Car> = [];

  constructor(
    private _carServ: CarService,
    private _router: Router
    ) { }

  ngOnInit() {
    this._cars = this._carServ.getCars();
  }

  AddCar(): void {
    this._router.navigate(['admin/car_add']);
  }

  carEdit(car: Car) {
    this._router.navigate(['admin/car_edit', car.id]);
  }

  carRemove(car: Car) {
    this._carServ.removeCar(car);
  }

}
