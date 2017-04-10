import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Car } from './../../models/car.model';
import { User } from './../../models/user.model';
import { UserService, CarService, BasketService } from './../../services';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  private _currUser: User;
  private _car: Car;
  private _carId: number;
  constructor(
    private _userService: UserService,
    private _carService: CarService,
    private _basketService: BasketService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._currUser = this._userService.CurrUser;
    this._carId = +this._route.snapshot.params['id'];

    this._car = this._carService.getCarByID(this._carId);
  }

  buyCar() {
    //do somesing
    this._basketService.RemoveFromBasket(this._carId);
    alert('Thank you. Your car will be sent to you by email :)');
    this._router.navigate(['store/basket']);
  }

  goBack(): void {
    this._router.navigate(['store/basket']);
  }
}
