import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user.model';

import { UserService } from './../../../services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  _users: Array<User>;

  constructor(private _userServ: UserService) { }

  ngOnInit() {
    this._users = this._userServ.Users;
  }

  removeUser(user: User) {
    this._userServ.removeUser(user);
  }

}
