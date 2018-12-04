import {Component, OnInit} from '@angular/core';
import {Drink} from '../api/drink';
import {HttpClient} from '@angular/common/http';
import {DrinkService} from '../drink-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.scss']
})
export class DrinkFormComponent implements OnInit {

  drink: Drink;
  drinks: Array<Drink>;


  constructor(private http: HttpClient, private drinkService: DrinkService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.drink = {
      drinkName: 'Overwrite me',
      bar: 'Overwrite me',
      price: 0
    };
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.drinkService.getDrinkById(id)
        .subscribe((response) => {
          this.drink = <Drink>response;
        });
    }
  }

  createUpdateDrink(drink: Drink) {
    if (this.drink.id) {
      this.drinkService.updateDrink(this.drink)
        .subscribe(() => {
          this.router.navigateByUrl('/drink-list');
        });
    } else {
      this.drinkService.createDrink(this.drink)
        .subscribe(() => {
          this.router.navigateByUrl('/drink-list');
        });
    }
  }

  goBack() {
    this.drinkService.getDrinks()
      .subscribe((response: any) => {
        this.drinks = response._embedded.drinks;
        if (this.drinks.length === 0) {
          alert('Not possible to go back, please create a Drink first!');
        } else {
          this.router.navigateByUrl('/drink-list');
        }
      });
  }
}
