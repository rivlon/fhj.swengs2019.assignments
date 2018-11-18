import { Component, OnInit } from '@angular/core';
import drinksJsonFile from '../drinks/drinks.json';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locationArray;

  constructor() { }

  ngOnInit() {
    this.locationArray = drinksJsonFile;
  }

}
