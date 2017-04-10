import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _login = '';
  private _firstName = '';
  private _lastName = '';
  private _pass = '';

  constructor( 
    private _userService: UserService,
    private _router: Router ) { }

  ngOnInit() { }

  Register() {
    if (this._userService.setUserToLocal(this._login, this._firstName, this._lastName, this._pass)) {
      this._login = '';
      this._pass = '';
      this._firstName = '';
      this._lastName = '';
      this._router.navigate([this._userService.redirectUrl]);
      this._userService.redirectUrl = '';
    } else { 
      alert('Sorry, but user already exists');
     }
  }

}
