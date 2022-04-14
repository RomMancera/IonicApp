import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLoadPage } from './form-load.page';

const routes: Routes = [
  {
    path: '',
    component: FormLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormLoadPageRoutingModule {}
