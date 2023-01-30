import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDetailAutorsPageRoutingModule } from './modal-detail-autors-routing.module';

import { ModalDetailAutorsPage } from './modal-detail-autors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDetailAutorsPageRoutingModule
  ],
  declarations: [ModalDetailAutorsPage]
})
export class ModalDetailAutorsPageModule {}
