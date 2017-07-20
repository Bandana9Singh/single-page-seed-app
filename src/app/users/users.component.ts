import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: []
})
export class UsersComponent implements OnInit {
  users;

  constructor(private _usersService: UserService) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onEditUser(id:number){
    console.log("Event triggered");
    this._usersService.getUser(id).subscribe(user=>console.log(user));
  }
}
