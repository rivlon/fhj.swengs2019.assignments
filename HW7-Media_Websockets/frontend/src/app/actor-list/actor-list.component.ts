import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../api/actor';
import {ActorService} from '../service/actor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  actors: Array<Actor>;

  constructor(private actorService: ActorService, private router: Router) {
  }

  ngOnInit() {

    this.actorService.getAll()
      .subscribe((actors: any) => {
        this.actors = actors;
      });

  }

  deleteActor(actor: Actor) {

    this.actorService.delete(actor)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createActor() {
    this.router.navigate(['/actor-form']);
  }
}
