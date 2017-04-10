import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from './store/store.module';
import { ComponentModule } from './components/component.module';
import { RouterModule } from '@angular/router';

import { CarService, UserService, BasketService } from './services';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule, appRouterComponents } from './app.routing.module';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    ComponentModule,
    StoreModule
  ],
  providers: [
    CarService,
    UserService,
    AuthGuard,
    BasketService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
