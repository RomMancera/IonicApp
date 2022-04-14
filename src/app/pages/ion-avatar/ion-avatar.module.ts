import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonAvatarPageRoutingModule } from './ion-avatar-routing.module';

import { IonAvatarPage } from './ion-avatar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonAvatarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonAvatarPage]
})
export class IonAvatarPageModule {}
