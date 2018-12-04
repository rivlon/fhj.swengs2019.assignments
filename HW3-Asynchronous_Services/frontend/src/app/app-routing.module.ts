import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkFormComponent } from './drink-form/drink-form.component';
import { DrinkListComponent} from './drink-list/drink-list.component';

const routes: Routes = [
  {path: '', component: DrinkListComponent},
  {path: 'drink-form', component: DrinkFormComponent},
  {path: 'drink-list', component: DrinkListComponent },
  {path: 'drink-form/:id', component: DrinkFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
