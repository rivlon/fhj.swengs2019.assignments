import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Drink} from './api/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) {
  }

  createDrink(drink: Drink) {
    return this.http.post('/api/drinks', drink);
  }

  deleteDrink(drink: Drink) {
    return this.http.delete('/api/drinks/' + drink.id);
  }

  updateDrink(drink: Drink) {
    return this.http.put('/api/drinks/' + drink.id, drink);
  }

  getDrinks() {
    return this.http.get('/api/drinks');
  }

  getDrinkById(id) {
    return this.http.get('/api/drinks/' + id);
  }
}
