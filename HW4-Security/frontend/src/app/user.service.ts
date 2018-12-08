import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {User} from './api/user';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn: boolean;
  loggedInChange: Subject<boolean> = new Subject<boolean>();
  isAdmin: boolean;

  accessTokenLocalStorageKey = 'access_token';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {

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
      const infos = helper.decodeToken(token);
      this.isAdmin = infos.authorities.filter((o) => o === 'ROLE_ADMIN').length > 0;
      this.loggedInChange.next(true);
      if (this.isAdmin === false) {
        this.router.navigate(['/drink-list']);
      } else {
        this.router.navigate(['/user-list']);
      }
      return res;
    }));
  }

  logout() {
    localStorage.removeItem(this.accessTokenLocalStorageKey);
    this.loggedInChange.next(false);
    this.router.navigate(['/login']);
  }

  getAll() {
    return this.http.get('/api/users');
  }

  getById(id: String) {
    return this.http.get('/api/users/' + id);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

}
