import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../api/user';
import {Drink} from '../api/drink';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Array<User>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.getAll()
      .subscribe((response: any) => {
        this.users = response._embedded.users;
      });
  }
}
