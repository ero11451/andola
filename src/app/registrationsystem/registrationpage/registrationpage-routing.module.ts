import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationpagePage } from './registrationpage.page';
import { LoginPage } from '../login/login.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationpagePage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationpagePageRoutingModule {}
