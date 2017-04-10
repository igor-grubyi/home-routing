import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from './../../models/car.model';

import { CarService, UserService } from './../../services';
import { BasketService } from './../../services';


@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  private _cars: Array<Car>;
  private _isLoggedIn = false;

  constructor(
    private _carService: CarService,
    private _userService: UserService,
    private _basketService: BasketService,
    private _router: Router
    ) { }

  ngOnInit() {
    this._cars = this._carService.getCars();
    this._isLoggedIn = this._userService.CurrUser != null;
  }

  AddToBasket(carID): void {
    if (this._isLoggedIn) {
    this._basketService.AddToBasket(carID);
  } else {
      this._userService.redirectUrl = 'store';
      this._router.navigate(['register']);
    }
  }

}
