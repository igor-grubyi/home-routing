import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreRoutingModule } from './store.routing.module';

import { CarComponent } from './../components';
import { CarListComponent } from './car-list/car-list.component';
import { BasketComponent } from './basket/basket.component';
import { StoreComponent } from './store.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    CarListComponent,
    CarComponent,
    StoreComponent,
    BasketComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    StoreRoutingModule
  ],
  providers: [],
  exports: [
    // CarListComponent,
    // BasketComponent
  ]
})
export class StoreModule { }
