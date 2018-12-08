import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DrinkFormComponent} from './drink-form/drink-form.component';
import {DrinkListComponent} from './drink-list/drink-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {UserFormComponent} from './user-form/user-form.component';
import {AdminGuardGuard} from './admin-guard.guard';
import {UserListComponent} from './user-list/user-list.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: 'drink-form', component: DrinkFormComponent, canActivate: [AuthGuard]},
  {path: 'drink-list', component: DrinkListComponent, canActivate: [AuthGuard]},
  {path: 'drink-form/:id', component: DrinkFormComponent, canActivate: [AuthGuard]},
  {path: 'user-form/:id', component: UserFormComponent, canActivate: [AdminGuardGuard]},
  {path: 'user-form', component: UserListComponent, canActivate: [AdminGuardGuard]},
  {path: 'user-list', component: UserListComponent, canActivate: [AdminGuardGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
