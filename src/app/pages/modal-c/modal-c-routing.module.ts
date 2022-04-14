import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCPage } from './modal-c.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCPageRoutingModule {}
