import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarListComponent } from './car-list/car-list.component';
import { BasketComponent } from './basket/basket.component';
import { StoreComponent } from './store.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from './../guards/auth.guard';

const storeRoutes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'basket', component: BasketComponent, canActivate: [AuthGuard]},
          { path: 'order/:id', component: OrderComponent, canActivate: [AuthGuard]},
          { path: '', component: CarListComponent}
        ]
      }
    ]
  }
];

export let storeRouterComponent = [StoreComponent, CarListComponent, BasketComponent, OrderComponent];

@NgModule({
  imports: [
    RouterModule.forChild(storeRoutes)
  ]
})
export class StoreRoutingModule { }
