import { Injectable } from '@angular/core';

@Injectable ()
export class DataService {

    constructor ( ) {}

    setUserToLocal(aKey: string, aValue: string) {
        localStorage.setItem(aKey, aValue);
    }

    getUserFromLocal(aKey: string): string {
        return localStorage.getItem(aKey);
    }
}