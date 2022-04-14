import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonAvatarPage } from './ion-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: IonAvatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonAvatarPageRoutingModule {}
