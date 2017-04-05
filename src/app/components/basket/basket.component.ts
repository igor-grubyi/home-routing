import { Component, OnInit } from '@angular/core';
import { Car } from './../../models/car.model';
import { CarService } from './../../store/car.service';
import { UserService } from './../user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  private _cars: Array<Car> = [];

  constructor( 
    private _userService: UserService,
    private _carService: CarService
   ) { }

  ngOnInit() {
    this._cars = this._carService.getCarsByIds(this._userService.UserCarsID);
  }

}
