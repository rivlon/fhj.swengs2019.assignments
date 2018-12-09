import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from './api/actor';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {
  }
  prepareActorForSaving(actor: Actor) {
    if (actor.dayOfBirth instanceof String) {
      actor.dayOfBirth = new Date(actor.dayOfBirth)
    }
  }

  getById(id: string) {
    return this.http.get('/api/dto/actors/' + id).pipe(map((res: any) => {
      res.dayOfBirth = new Date(res.dayOfBirth);
      return res;
    }));
  }

  getMoviesForActor(id: string) {
    return this.http.get('/api/actors/' + id + '/movies');
  }


  getAll() {
    return this.http.get('/api/actors');
  }

  delete(actor) {
    return this.http.delete('/api/actors/' + actor.id);
  }

  update(actor: Actor) {
    this.prepareActorForSaving(actor);
    return this.http.put('/api/dto/actors/' + actor.id, actor);
  }

  create(actor: Actor) {
    this.prepareActorForSaving(actor);
    return this.http.post('/api/dto/actors', actor);
  }

}
