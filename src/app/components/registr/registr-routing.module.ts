import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrComponent} from './registr.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrRoutingModule { }
