import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntoDetialsPage } from './into-detials.page';

const routes: Routes = [
  {
    path: '',
    component: IntoDetialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntoDetialsPageRoutingModule {}
