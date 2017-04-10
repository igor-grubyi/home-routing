import { Injectable } from '@angular/core';
import { CanActivate, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
     private _userService: UserService,
     private _router: Router
     ) {}

  checkLogin(url: string): boolean {

    if (this._userService.CurrUser != null) {
      return true;
    }

    // Store the attempted URL for redirecting
    this._userService.redirectUrl = url;

    // Navigate to the register page
    this._router.navigate(['register']);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }
}