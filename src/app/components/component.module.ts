import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '.';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [BasketComponent],
  imports: [
    FormsModule,  
    CommonModule,
  ],
  providers: [
    UserService
  ]
})
export class ComponentModule {}
