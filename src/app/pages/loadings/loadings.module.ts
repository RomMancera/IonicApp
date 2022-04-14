import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingsPageRoutingModule } from './loadings-routing.module';

import { LoadingsPage } from './loadings.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingsPageRoutingModule,
    ComponentsModule

  ],
  declarations: [LoadingsPage]
})
export class LoadingsPageModule {}
