import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from './../../models/car.model';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements AfterViewInit {

  @Input() car: Car;
  @ViewChild('img') carImg: ElementRef;

  constructor(private router: Router) { }
  ngAfterViewInit() {
    (<HTMLInputElement>this.carImg.nativeElement).src = this.car.img;
  }
}
