import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmsFavouriteComponent} from './films-favourite.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsFavouriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsFavouriteRoutingModule { }
