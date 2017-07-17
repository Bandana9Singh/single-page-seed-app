import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

import { Users } from './users';

@Injectable()
export class UserService {
    private _userUrl = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){}

    getUsers() : Observable<Users>{
        return this._http.get(this._userUrl).map(res => res.json());
    }
}