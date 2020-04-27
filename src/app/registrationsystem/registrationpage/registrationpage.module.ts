import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationpagePageRoutingModule } from './registrationpage-routing.module';

import { RegistrationpagePage } from './registrationpage.page';
import { LoginPageModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationpagePageRoutingModule,
    LoginPageModule
  ],
  declarations: [
    RegistrationpagePage,

  ]
})
export class RegistrationpagePageModule {}
