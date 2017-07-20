import { Injectable } from '@angular/core';

Injectable()
export class ConfigService {
    _userUrl: String;

    constructor(){
        this._userUrl='https://jsonplaceholder.typicode.com/users';
    }
    getUsersUrl() {
        return this._userUrl;
    }
}