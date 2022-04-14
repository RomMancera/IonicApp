import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCPageRoutingModule } from './modal-c-routing.module';

import { ModalCPage } from './modal-c.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalCPage]
})
export class ModalCPageModule {}
