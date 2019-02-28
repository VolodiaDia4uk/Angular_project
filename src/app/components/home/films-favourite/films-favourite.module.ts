import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FilmsFavouriteComponent} from './films-favourite.component';
import { FilmsFavouriteRoutingModule } from './films-favourite-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [FilmsFavouriteComponent],
  imports: [
    CommonModule,
    FilmsFavouriteRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule
  ]
})
export class FilmsFavouriteModule { }
