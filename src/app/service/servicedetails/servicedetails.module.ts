import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicedetailsPageRoutingModule } from './servicedetails-routing.module';

import { ServicedetailsPage } from './servicedetails.page';
import { SuperTab, SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicedetailsPageRoutingModule,
    SuperTabsModule
  ],
  declarations: [ServicedetailsPage]
})
export class ServicedetailsPageModule {}
