import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'app/models/car.model';
import { CarService } from 'app/services';


@Component({
  selector: 'car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  private _carId: number;
  private _car: Car;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _carServ: CarService ) { }

  ngOnInit() {
    let carID = this._carServ.getMaxCarID();
    this._car = new Car(++carID, null, null, null, null, 'for sale');
  }

  Save() {
    const car = new Car(this._car.id, this._car.brand,
      this._car.model, this._car.year, this._car.color, this._car.state);
    this._carServ.addCar(car);
    this._router.navigate(['/admin/cars']);
  }

  Cancel() {
    this._router.navigate(['/admin/cars']);
  }

}
