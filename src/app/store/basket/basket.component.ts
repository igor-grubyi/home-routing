import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from './../../models/car.model';

import { UserService, BasketService } from './../../services';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  private _cars: Array<Car> = [];
  private _isLoggedIn = false;

  constructor(
    private _userService: UserService,
    private _basketService: BasketService,
    private router: Router
   ) { }

  ngOnInit() {
    this._isLoggedIn = this._userService.CurrUser != null;
    this._cars = this._basketService.Basket;
  }

  DeleteFromBasket(carID: number): void {
    this._basketService.RemoveFromBasket(carID);
    this._cars = this._basketService.Basket;
  }

  openOrder(carID: number): void {
    this.router.navigate(['store/order', carID]);
  }
}
