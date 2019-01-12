import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../api/actor';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {
  }

  getById(id: string) {
    return this.http.get('/api/dto/actors/' + id).pipe(map((res: any) => {
      if (res.dayOfBirth) {
        res.dayOfBirth = new Date(res.dayOfBirth);
      }
      return res;
    }));
  }

  getAll() {
    return this.http.get('/api/actors').pipe(
      map((response: any) => {
        return response._embedded.actors;
      })
    );
  }

  delete(actor) {
    return this.http.delete('/api/actors/' + actor.id);
  }

  update(actor: Actor) {
    return this.http.put('/api/dto/actors/' + actor.id, actor);
  }

  create(actor: Actor) {
    return this.http.post('/api/dto/actors', actor);
  }

}
