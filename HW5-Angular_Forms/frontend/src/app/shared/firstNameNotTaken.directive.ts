import { AbstractControl } from '@angular/forms';
import {map} from 'rxjs/operators';
import {ActorService} from '../actor.service';

export class FirstNameNotTaken {
  static createValidator(actorService: ActorService) {
    return (control: AbstractControl) => {
      return actorService.getByFirstName(control.value).pipe(map((res: any) => {
        return res === null || res.length === 0 ? null : {firstNameTaken: true};
      }));
  };
}}
