import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarListComponent } from './';

const storeRoutes: Routes = [
  {
    path: 'home',
    component: CarListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(storeRoutes)
  ]
})
export class StoreRoutingModule { }
