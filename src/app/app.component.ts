import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  private _subsc: Subscription[] = [];
  private _isAdmin: boolean;

  constructor ( private _userService: UserService ) { }

  ngOnInit() {
    const subGet = this._userService.getUsers()
                .subscribe(
                users => this._userService.Users = users,
                error => this._userService.handleError
                );
            this._subsc.push(subGet);
  }

  ngOnDestroy() {
    this._userService.Users.forEach(user => {
      const subSet = this._userService.setUser(user)
            .subscribe(
                null,
                error => this._userService.handleError
            );
      this._subsc.push(subSet);
    });

    this._subsc.forEach(sub => sub.unsubscribe());
  }
}
