import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/api/movies');
  }

  getGenreForMovie(id: String) {
    return this.http.get('/api/movies/' + id + '/genre');
  }
}
