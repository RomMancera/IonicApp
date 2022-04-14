import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFPageRoutingModule } from './modal-f-routing.module';

import { ModalFPage } from './modal-f.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalFPage]
})
export class ModalFPageModule {}
