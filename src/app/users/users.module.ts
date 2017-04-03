import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule, usersRouterComponents } from './users.routing.module';
import { UserComponent, UserArrayService } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UsersRoutingModule
  ],
  declarations: [
    UserComponent,
    usersRouterComponents
    ],
  providers: [UserArrayService]
})
export class UsersModule {}
