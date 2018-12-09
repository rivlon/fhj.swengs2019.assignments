import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn: boolean;
  loggedInChange: Subject<boolean> = new Subject<boolean>();

  accessTokenLocalStorageKey = 'access_token';

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn = !!localStorage.getItem(this.accessTokenLocalStorageKey);
    this.loggedInChange.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  login(user) {
    return this.http.post('/api/auth/', user, {
      'headers': new HttpHeaders({'Content-Type': 'application/json'}),
      'responseType': 'text',
      observe: 'response'
    }).pipe(map((res: any) => {
      const token = res.headers.get('Authorization').replace(/^Bearer /, '');
      localStorage.setItem(this.accessTokenLocalStorageKey, token);
      const helper = new JwtHelperService();
      console.log(helper.decodeToken(token));
      this.loggedInChange.next(true);
      this.router.navigate(['/actor-list']);
      return res;
    }));
  }

  logout() {
    localStorage.removeItem(this.accessTokenLocalStorageKey);
    this.loggedInChange.next(false);
    this.router.navigate(['/login']);
  }

}
