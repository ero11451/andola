import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationpagePageRoutingModule } from './registrationpage-routing.module';

import { RegistrationpagePage } from './registrationpage.page';
import { RegisterComponent } from '../register/register.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { GetcodeComponent } from '../getcode/getcode.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationpagePageRoutingModule
  ],
  declarations: [
    RegistrationpagePage,
    RegisterComponent,
    ForgotpasswordComponent,
    GetcodeComponent
  ]
})
export class RegistrationpagePageModule {}
