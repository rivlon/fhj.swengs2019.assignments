import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drink} from '../api/drink';
import {DrinkService} from '../drink.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../api/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  user: User;
  drinks: Array<Drink>;

  constructor(private drinkService: DrinkService, private router: Router, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {

    this.drinkService.getAll()
      .subscribe((response: any) => {
        this.drinks = response._embedded.drinks;
      });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getById(id)
        .subscribe((response) => {
          this.user = <User>response;
        });
    }

  }

  deleteDrink(drink: Drink) {

    this.drinkService.delete(drink)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createDrink() {
    this.router.navigate(['/drink-form']);
  }
}
