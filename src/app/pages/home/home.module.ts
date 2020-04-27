import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MenuComponent } from 'src/app/menu/menu.component';
import { IntoDetialsPageModule } from '../into/into-detials/into-detials.module';
import { NgPipesModule } from "ngx-pipes";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgPipesModule
  ],
  declarations: [HomePage]

})
export class HomePageModule {}
