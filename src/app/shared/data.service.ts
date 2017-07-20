import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 

import { Users, User } from './interfaces';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {
    private _userUrl;

    constructor(private _http: Http, private _config: ConfigService){
        this._userUrl = _config.getUsersUrl();
    }

    getUsers() : Observable<Users>{
        return this._http.get(this._userUrl).map(res => res.json());
    }

    getUser(id : number): Observable<User>{
        return this._http.get(this._userUrl +"/"+ id).map(res => res.json());
    }
}