import {Component, OnInit} from '@angular/core';
import {User} from '../api/user';
import {Drink} from '../api/drink';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User;
  shouldNavigateToList: boolean;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = {
      username: '',
      password: '',
      admin: false
    };
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getById(id)
        .subscribe((response) => {
          this.user = <User>response;
        });
    }

  }

  updateUser() {

    if (this.user.id) {
      this.userService.update(this.user)
        .subscribe(() => {
          alert('updated successfully');
          this.navigateToUserList();
        });
    }

  }

  navigateToUserList() {
    if (this.shouldNavigateToList) {
      this.router.navigate(['/user-list']);
    }
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }


}
