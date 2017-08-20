import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Users, User } from './interfaces';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {
    private _userUrl;

    private users : any[];
    constructor(private _http: Http, private _config: ConfigService ){
        this._userUrl = _config.getUsersUrl();
    }
    userStack(users){
        if(this.users == undefined){
            this.users = users;
        }
        return this.users;
    }
    getUsers(): Observable<Users>{
        return this._http.get(this._userUrl).map(res => res.json());
    }

    getUser(id : number) : Observable<User>{
        return this._http.get(this._userUrl +"/"+ id).map(res => res.json());
    }
    
    addUser(userBody: User) {
        this._http.post(this._userUrl, JSON.stringify(userBody)).map(res => res.json()).subscribe(res => {
            this.users.splice(0, 0, userBody);
        });
    }

    updateUser(){}
} 