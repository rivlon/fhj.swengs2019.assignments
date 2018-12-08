import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Drink} from './api/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) {
  }

  getById(id: string) {
    return this.http.get('/api/drinks/' + id);
  }

  getAll() {
    return this.http.get('/api/drinks');
  }

  delete(drink) {
    return this.http.delete('/api/drinks/' + drink.id);
  }

  update(drink: Drink) {
    return this.http.put('/api/drinks/' + drink.id, drink);
  }

  create(drink: Drink) {
    return this.http.post('/api/drinks', drink);
  }

}
