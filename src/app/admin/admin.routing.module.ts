import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, UserListComponent, CarListComponent, CarEditComponent, CarAddComponent } from '.';

import { AuthGuard } from './../guards/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'users', component: UserListComponent },
          { path: 'cars', component: CarListComponent },
          { path: 'car_edit/:id', component: CarEditComponent },
          { path: 'car_add', component: CarAddComponent },
          { path: '**', redirectTo: 'users' }
        ]
      }
    ]
  }
];

export let adminRouterComponents = [AdminComponent, UserListComponent, CarListComponent, CarEditComponent, CarAddComponent];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminRoutingModule { }
