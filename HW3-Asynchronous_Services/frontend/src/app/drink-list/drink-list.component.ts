import { Component, OnInit } from '@angular/core';
import {Drink} from '../api/drink';
import {HttpClient} from '@angular/common/http';
import {DrinkService} from '../drink-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  drinks: Array<Drink>;

  constructor(private http: HttpClient, private drinkService: DrinkService, private router: Router) { }

  ngOnInit() {
    this.drinkService.getDrinks()
        .subscribe( (response: any) => {
        this.drinks = response._embedded.drinks;
        if (this.drinks.length === 0) {
          this.router.navigateByUrl('/drink-form');
        }
      });
  }

  deleteDrink(drink: Drink) {
    this.drinkService.deleteDrink(drink)
      .subscribe(() => {
        this.router.navigateByUrl('/drink-list');
        window.location.reload();
      });
  }
}
