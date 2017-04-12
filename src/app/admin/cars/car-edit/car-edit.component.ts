import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'app/models/car.model';
import { CarService } from 'app/services';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  private _carId: number;
  private _car: Car;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _carServ: CarService ) { }

  ngOnInit() {
    this._carId = +this._route.snapshot.params['id'];

    this._car = Object.assign({}, this._carServ.getCarByID(this._carId));
  }

  Save() {
    this._carServ.updateCar(this._car);
    this._router.navigate(['/admin/cars']);
  }

  Cancel() {
    this._router.navigate(['/admin/cars']);
  }

}
