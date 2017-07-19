import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
