import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() { }
  ngOnInit() {}

  notification(){
    console.log('this  is a function of that is  active ')
  }

  // storage.set('name', 'Max');

  // storage.get('age').then((val) => {
  //   console.log('Your age is', val);
  // });
}
