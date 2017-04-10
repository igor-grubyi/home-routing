import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _login = '';
  private _pass = '';
  
  constructor( 
    private _userService: UserService,
    private _router: Router
   ) { }

  ngOnInit() { }

  LogIn(): void {
    if (this.checkUser(this._login, this._pass)) {
      this._userService.setCurrUserByLogin(this._login);
      this._router.navigate([this._userService.redirectUrl]);
      this._userService.redirectUrl = '';
    } else { alert('Incorrect creds'); }
  }

  LogOut(): void {
    this._router.navigate(['store']);
    this._userService.CurrUser = null;
    this._login = '';
    this._pass = '';
  }

  checkUser(aLogin, aPass: string): boolean {
      if ( this._userService.getUserFromLocal(aLogin) === aPass) {
        return true;
      } else { return false; };
  }

}
