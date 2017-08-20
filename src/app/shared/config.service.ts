import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    _usersUrl: String;

    constructor(){
        this._usersUrl='https://jsonplaceholder.typicode.com/users';
    }

    getUsersUrl(){
      return this._usersUrl;  
    }
}

