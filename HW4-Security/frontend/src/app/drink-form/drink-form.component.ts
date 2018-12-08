import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DrinkService} from '../drink.service';
import {Drink} from '../api/drink';
import {from} from 'rxjs';

@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.scss']
})
export class DrinkFormComponent implements OnInit {

  drink: Drink;
  shouldNavigateToList: boolean;

  constructor(private drinkService: DrinkService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.drink = {
      drinkName: '',
      bar: '',
      price: 0
    };

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.drinkService.getById(id)
        .subscribe((response) => {
          this.drink = <Drink>response;
        });
    }
  }

  saveDrink() {

    if (this.drink.id) {
      this.drinkService.update(this.drink)
        .subscribe(() => {
          alert('updated successfully');
          this.navigateToList();
        });
    } else {
      this.drinkService.create(this.drink)
        .subscribe(() => {
          alert('created successfully');
          this.navigateToList();
        });
    }

  }

  navigateToList() {
    if (this.shouldNavigateToList) {
      this.router.navigate(['/drink-list']);
    }
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }

}
