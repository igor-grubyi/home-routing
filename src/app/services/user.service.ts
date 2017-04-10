import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable ()
export class UserService {

    private _currUser: User = null;
    private _users: Array<User> = [];
    // store the URL so we can redirect after logging in
    redirectUrl = '';

    constructor ( ) {}

    setUserToLocal(aKey, firstName, lastName, aValue: string): boolean {
        if (localStorage.getItem(aKey)) {
            return false;
        } else {
            localStorage.setItem(aKey, aValue);
            this._currUser = new User(aKey, firstName, lastName, aValue);
            this._users.push(this._currUser);
            return true;
        }
    }

    getUserFromLocal(aKey: string): string {
        return localStorage.getItem(aKey);
    }

    setCurrUserByLogin(aKey: string): void {
        this._currUser = this._users.find(item => item.login === aKey);
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
        this._currUser.carsID.concat(carsID);
    }
}
