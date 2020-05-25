import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { MenuComponent } from '../menu/menu.component';
import { HomePageModule } from '../pages/home/home.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { HomePage } from '../pages/home/home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    SuperTabsModule
  ],
  declarations: [TabsPage],
  // entryComponents:[HomePage]
})
export class TabsPageModule {}
