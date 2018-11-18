import { Component, OnInit } from '@angular/core';
import drinksJsonFile from './drinks.json';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  filter;
  drinksArray;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const filterParam = this.route.snapshot.paramMap.get('filter');
    this.filter = filterParam ? filterParam : '';
    this.filterDrinks(this.filter);


    this.route.params.subscribe(params => {
      this.filter = params['filter'];
      this.filterDrinksForCategory(this.filter);
    });
  }

  filterDrinks(filterValue) {
    if (filterValue) {
      this.drinksArray = drinksJsonFile.filter((drink) => {
        return drink.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      });
    } else {
      this.drinksArray = drinksJsonFile;
    }
  }
  filterDrinksForCategory(filterValue) {
    if (filterValue) {
      this.drinksArray = drinksJsonFile.filter((drink) => {
        return drink.category.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      });
    } else {
      this.drinksArray = drinksJsonFile;
    }
  }

}
