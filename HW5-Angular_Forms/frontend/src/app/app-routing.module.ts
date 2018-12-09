import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActorFormComponent} from './actor-form/actor-form.component';
import {ActorListComponent} from './actor-list/actor-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: '/actor-list', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'actor-form', component: ActorFormComponent, canActivate: [AuthGuard]},
  {path: 'actor-list', component: ActorListComponent, canActivate: [AuthGuard]},
  {path: 'actor-form/:id', component: ActorFormComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
