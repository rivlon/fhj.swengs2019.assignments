import {Component, Directive, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActorService} from '../actor.service';
import {MovieService} from '../movie.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirstNameNotTaken} from '../shared/firstNameNotTaken.directive';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss']
})
export class ActorFormComponent implements OnInit {

  actorForm;
  shouldNavigateToList: boolean;
  movieOptions;
  text: string;
  size: string;

  constructor(private actorService: ActorService, private route: ActivatedRoute, private router: Router,
              private movieService: MovieService) {
  }

  ngOnInit() {

    this.actorForm = new FormGroup({
      'id': new FormControl(),
      'firstName': new FormControl([''], [Validators.required, Validators.minLength(2)],
        [FirstNameNotTaken.createValidator(this.actorService)]),
      'lastName': new FormControl(),
      'rating': new FormControl(),
      'movies': new FormControl(),
      'dayOfBirth': new FormControl(),
      'gender': new FormControl(),
      'alive': new FormControl(),
      'color': new FormControl(),
      'income': new FormControl(),
      'clothingSize': new FormControl()
    });

    this.movieService.getAll()
      .subscribe((movies: any) => {
        this.movieOptions = movies._embedded.movies;
      });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.actorService.getById(id)
        .subscribe((response) => {
          this.actorForm.setValue(response);
        });
    }

    this.actorForm.controls.rating.valueChanges.subscribe((newValue) => {
      if (newValue > 5) {
        this.actorForm.controls.alive.setValue(true);
      } else {
        this.actorForm.controls.alive.setValue(false);
      }
    });
  }

  saveActor() {

    const actor = this.actorForm.value;
    if (actor.id) {
      this.actorService.update(actor)
        .subscribe(() => {
          alert('updated successfully');
          this.navigateToList();
        });
    } else {
      this.actorService.create(actor)
        .subscribe(() => {
          alert('created successfully');
          this.navigateToList();
        });

    }

  }

  setClothingSize(size: string) {
    this.size = size;
    this.actorForm.patchValue({clothingSize: size});
  }

  onOpenChange() {
    this.text = this.size ? this.size : 'not set';
  }

  navigateToList() {
    if (this.shouldNavigateToList) {
      this.router.navigate(['/actor-list']);
    }
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }

}
