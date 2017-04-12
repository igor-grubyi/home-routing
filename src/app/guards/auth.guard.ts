import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
     private _userService: UserService,
     private _router: Router
     ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return (this.checkLogin(url) && (this._userService.CurrUser.login === 'admin'));
  }

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
}
