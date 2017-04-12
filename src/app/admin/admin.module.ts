import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent, UserComponent, UserListComponent, CarEditComponent, CarAddComponent } from '.';
import { AdminRoutingModule } from './admin.routing.module';
import { CarExtComponent } from './cars/car-ext/car-ext.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AdminRoutingModule
  ],
  declarations: [
   UserComponent,
   UserListComponent,
   AdminComponent,
   CarEditComponent,
   CarAddComponent,
   CarExtComponent,
   CarListComponent]
})
export class AdminModule {}
