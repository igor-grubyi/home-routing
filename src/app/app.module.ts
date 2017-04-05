import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from './store/store.module';
import { ComponentModule } from './components/component.module';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, appRouterComponents } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents,
    LoginComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
