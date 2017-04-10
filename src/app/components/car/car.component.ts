import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from './../../models/car.model';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements AfterViewInit {

  @Input() car: Car;
  @Input() storeMode = false;
  @Input() basketMode = false;
  @Output() toBasket: EventEmitter<number>;
  @Output() fromBasket: EventEmitter<number>;
  @Output() buy: EventEmitter<number>;
  @ViewChild('img') carImg: ElementRef;

  constructor(private router: Router) {
    this.toBasket = new EventEmitter<number>();
    this.fromBasket = new EventEmitter<number>();
    this.buy = new EventEmitter<number>();
   }

  ngAfterViewInit() {
    (<HTMLInputElement>this.carImg.nativeElement).src = this.car.img;
  }

  AddToBasket(): void {
    // console.log('carComponent' + this.car.id);
    this.toBasket.emit(this.car.id);
  }
  RemoveFromBasket(): void {
    this.fromBasket.emit(this.car.id);
  }

  Buy(): void {
    this.buy.emit(this.car.id);
  }
}
