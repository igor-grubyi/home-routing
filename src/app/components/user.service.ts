import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable ()
export class UserService {
    
    private _currUser: User;
    private _users: Array<User> = [];

    constructor ( ) {}

    setUserToLocal(aKey: string, aValue: string): boolean {
        if (localStorage.getItem(aKey)) {
            return false;
        } else {
            localStorage.setItem(aKey, aValue);
            this._currUser = new User(aKey, aValue);
            this.AddUser(this._currUser);
            return true;
        }
    }

    getUserFromLocal(aKey: string): string {
        return localStorage.getItem(aKey);
    }

    setCurrUserByLogin(aKey): void {
        this._users.forEach((item, index) => {
            if (item.name === aKey) {
                 this._currUser = this._users[index]; 
            }
        });
    }

    AddUser(user: User): void {
        this._users.push(user);
    }

    removeUser(aKey: string): void {
        localStorage.removeItem(aKey);
    }

    get CurrUser(): User {
        return this._currUser;
    }

    set CurrUser(user: User) {
        this._currUser = user;
    }

    get Users(): Array<User> {
        return this._users;
    }

    get UserCarsID(): Array<number> {
        return this._currUser.carsID;
    }

    set UserCarsID(carsID: Array<number>) {
        carsID.forEach(carsID => {this._currUser.carsID.push(carsID)});
    }

}