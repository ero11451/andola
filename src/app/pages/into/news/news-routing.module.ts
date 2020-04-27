import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';
import { IntoDetialsPage } from '../into-detials/into-detials.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
