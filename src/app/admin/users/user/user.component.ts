import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../../models/user.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User;
  @Output() removeUser: EventEmitter<User>;

  constructor( ) {
    this.removeUser = new EventEmitter<User>();
  }

  deleteUser(user: User) {
    this.removeUser.emit(user);
  }

}
