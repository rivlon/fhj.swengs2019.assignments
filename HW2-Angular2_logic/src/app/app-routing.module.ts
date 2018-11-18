import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DrinksComponent} from './drinks/drinks.component';
import {LocationsComponent} from './locations/locations.component';

const routes: Routes = [
  {path: '', redirectTo: '/drinks', pathMatch: 'full'},
  {path: 'drinks', component: DrinksComponent},
  {path: 'drinks/:filter', component: DrinksComponent},
  {path: 'locations', component: LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
