import { Injectable } from '@angular/core';
import { CarService } from '.';
import { UserService } from '.';
import { User } from './../models/user.model';
import { Car } from './../models/car.model';

@Injectable ()
export class BasketService {

    constructor( 
    private _userService: UserService,
    private _carService: CarService
   ) { }

   get Basket(): Array<Car> {
    //    console.log("basket.servise: " + this._carService.getCarsByIds(this._userService.UserCarsID));
       return this._carService.getCarsByIds(this._userService.UserCarsID);
   }

   AddToBasket(carID: number): void {
    //    console.log("basket.servise" + carID);
       this._userService.UserCarsID.push(carID);
   }
   
   RemoveFromBasket(carID: number): void {
       let i = -1;
       this._userService.UserCarsID.forEach((item, index) => {
           if (item === carID) {
               i = index;
               return false;
           }
       });

       if (i > -1) { this._userService.UserCarsID.splice(i, 1); }
   }
}