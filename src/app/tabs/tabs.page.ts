import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {

  constructor() {}
  home = HomePage
}
