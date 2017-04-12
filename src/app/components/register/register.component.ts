import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from './../../rxjs-extensions';

import { UserService } from './../../services';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private _login = '';
  private _firstName = '';
  private _lastName = '';
  private _pass = '';

  private _sub: Subscription[] = [];

  constructor( 
    private _userService: UserService,
    private _router: Router ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this._sub.forEach(sub => sub.unsubscribe());
  }

  Register() {

    if (this._userService.setUserToLocal(this._login, this._firstName, this._lastName, this._pass)) {
      this._sub.push( this._userService.setUser(this._userService.CurrUser).subscribe(
                null,
                error => this._userService.handleError)
           );
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
