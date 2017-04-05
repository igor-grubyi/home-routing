import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _login = '';
  private _pass = '';

  constructor( private _userService: UserService ) { }

  ngOnInit() { }

  Register() {
    if (this._userService.setUserToLocal(this._login, this._pass)) {
      this._login = '';
      this._pass = '';
    } else { 
      alert('Sorry, but user already exists');
     }
  }

}
