import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFPage } from './modal-f.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFPageRoutingModule {}
