import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store.routing.module';

import { CarListComponent, CarComponent, CarService } from '.';
// , TaskFormComponent, TaskArrayService, TaskPromiseService

@NgModule({
  declarations: [
    CarListComponent,
    CarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreRoutingModule
  ],
  providers: [
    CarService,
    // TaskPromiseService
  ],
  exports: [
    CarListComponent
  ]
})
export class StoreModule { }
