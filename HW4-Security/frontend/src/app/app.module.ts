import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DrinkFormComponent} from './drink-form/drink-form.component';
import {FormsModule} from '@angular/forms';
import {DrinkListComponent} from './drink-list/drink-list.component';
import {JwtModule} from '@auth0/angular-jwt';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    DrinkFormComponent,
    DrinkListComponent,
    LoginComponent,
    LogoutComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
