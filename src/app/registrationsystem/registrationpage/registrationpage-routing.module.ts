import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationpagePage } from './registrationpage.page';
import { RegisterComponent } from '../register/register.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { GetcodeComponent } from '../getcode/getcode.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationpagePage,
  },
  {
    path:"register/:usertype",
    component:RegisterComponent
  },
  {
    path:"forgot",
    component:ForgotpasswordComponent
  },
  {
    path:"getcode",
    component:GetcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationpagePageRoutingModule {}
