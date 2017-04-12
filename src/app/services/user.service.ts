import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import './../rxjs-extensions';

import { User } from './../models/user.model';

@Injectable()
export class UserService {

    private _usersUrl = 'http://localhost:3000/users';
    private _currUser: User = null;
    private _users: Array<User> = [];
    private _sub: Subscription[] = [];
    private _errorMessage: string;
    // store the URL so we can redirect after logging in
    redirectUrl = '';

    constructor( private _http: Http ) { }

    setUserToLocal(aKey, firstName, lastName, aValue: string): boolean {

        if (!this._users.find(user => user.login === aKey)) {
            let id = this._users[this._users.length - 1].id;
            this._currUser = new User(++id, aKey, firstName, lastName, aValue);
            this._users.push(this._currUser);
            return true;
        } else {
            return false;
       }
    }

    checkCreds(key, value: string): boolean {
        const _user = this._users.find(user => user.login === key);
        if (_user.pass === value) {return true; }
        else {return false; }
    }

    getUsers(): Observable<User[]> {
        return this._http.get(this._usersUrl)
            .map(this.handleData)
            .catch(this.handleError);
    }

    // getUser(login: string) {
    //     return this._http.get(`${this._usersUrl}/${login}`)
    //         .map( this.handleData )
    //         .catch(this.handleError);
    // }

    setUser(user: User): Observable<User> {
        const url = this._usersUrl,
            body = JSON.stringify(user),
            headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions();

        options.headers = headers;

        return this._http.post(url, body, options)
            .map(this.handleData)
            .catch(this.handleError);
    }

    private handleData(response: Response) {
        const body = response.json();
        return body || {};
    }

    handleError(error: any) {
        const errMsg = (error.message) ? error.message : error.status
            ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    setCurrUserByLogin(aKey: string): void {
        this._currUser = this._users.find(item => item.login === aKey);
    }

    removeUser(user: User): void {
        const index = this._users.indexOf(user);
        if (index >= 0) {
            this._users.splice(index, 1);
        }
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

    set Users(users: Array<User>) {
        this._users = users;
    }

    get UserCarsID(): Array<number> {
        return this._currUser.carsID;
    }

    set UserCarsID(carsID: Array<number>) {
        this._currUser.carsID.concat(carsID);
    }

}
