import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormLoadPageRoutingModule } from './form-load-routing.module';

import { FormLoadPage } from './form-load.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormLoadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormLoadPage]
})
export class FormLoadPageModule {}
