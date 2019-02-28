import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrRoutingModule } from './registr-routing.module';
import { RegistrComponent} from './registr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from '../../material.module';


@NgModule({
  declarations: [RegistrComponent],
  imports: [
    CommonModule,
    RegistrRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class RegistrModule { }
