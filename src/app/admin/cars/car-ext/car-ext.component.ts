import { Component, Input, Output, AfterViewInit, ViewChild,
         ElementRef, EventEmitter } from '@angular/core';
import { Car } from './../../../models/car.model';

@Component({
  selector: 'car-ext',
  templateUrl: './car-ext.component.html',
  styleUrls: ['./car-ext.component.css']
})
export class CarExtComponent implements AfterViewInit {

  @Input() car: Car;
  @Output() edit: EventEmitter<Car>;
  @Output() delete: EventEmitter<Car>;
  @ViewChild('img') carImg: ElementRef;

  constructor() {
    this.edit = new EventEmitter<Car>();
    this.delete = new EventEmitter<Car>();
   }

  ngAfterViewInit() {
    (<HTMLInputElement>this.carImg.nativeElement).src = this.car.img;
  }

  Edit(car: Car) {
    this.edit.emit(car);
  }

  Remove(car: Car) {
    this.delete.emit(car);
  }

}
