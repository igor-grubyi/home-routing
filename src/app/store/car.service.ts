import { Injectable } from '@angular/core';
import { Car } from './../models/car.model';

const modelList = ['avensis', 'camry', 'corola', 'highlander',
  'hilux', 'land-cruiser', 'rav4', 'sequoia', 'yaris'];

const CarList = fillList('Toyota', modelList);

function fillList(brand: string, models: string[]): Array<Car> {

  const cars: Array<Car> = [];
  models.forEach((item, index) => {
    cars.push(new Car(++index, brand, item, 2016, 0xFFFFFF, 'for sale'));
  });
  return cars;
}
@Injectable()
export class CarService {

  constructor() { }

  getCars(): Array<Car> {
    return CarList;
  }

  getCarsByIds(carsID: Array<number>): Array<Car> {
    return CarList.filter(item => item.id in carsID);
  }

}
