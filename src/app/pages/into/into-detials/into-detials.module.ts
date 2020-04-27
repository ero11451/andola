import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntoDetialsPageRoutingModule } from './into-detials-routing.module';

import { IntoDetialsPage } from './into-detials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntoDetialsPageRoutingModule
  ],
  declarations: [IntoDetialsPage]
})
export class IntoDetialsPageModule {}
