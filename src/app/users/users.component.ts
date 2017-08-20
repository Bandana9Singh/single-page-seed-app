import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../shared/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private _userService: UserService) {
    this._userService.getUsers().subscribe(response => {
      this.users = this._userService.userStack(response);
    });
  }

  ngOnInit() {
    this.users = this._userService.userStack(this.users);
  }
}
