import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public btnCaption;
  private _login = '';
  private _pass = '';
  private _currUser = '';

  constructor() { } //public dataService: DataService

  ngOnInit() { 
    this.btnCaption = 'Register';
  }

  Register() {
    let user: User;
    if ((this._login != '') && (this._pass != '')) {
      user = new User(this._login, this._pass);
      // this.dataService.setUserToLocal(Login.value, Pass.value);
    this._currUser = user.name;
    this.btnCaption = 'Login';
    }
  }

}
