import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { network } from "../../helperfunctions/network.js";
import { IonichelperService } from 'src/app/helperfunctions/ionichelper.service.js';
import { handleIndicator } from "../../../assets/myjs/nav.js";
import { info } from "../../models/slider";
import { ThemeService } from 'src/app/theme.service.js';
import { ModalController } from '@ionic/angular';
import { IntoDetialsPageModule } from '../into/into-detials/into-detials.module.js';
import { IntoDetialsPage } from '../into/into-detials/into-detials.page.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
}) 
export class HomePage implements OnInit {
   info
   @ViewChild('slider', { static: true }) slider: ElementRef;

  sliderOpts = {
    autoplay: true,
    zoom: {
      maxRatio: 5
    }
  };

  user:{
    name:"osasu"
  }
  constructor(
    private modalController: ModalController,
    private loadding:IonichelperService,private theme:ThemeService) { }
  onlinestatus = network()

  ngOnInit() {
    // this.loadding.Loading("no internet",this.onlinestatus)
    // handleIndicator()
   
  }

  
  enableDark(){ 
    this.theme.enableDark()
   }
   enablelight(){ 
    this.theme.enablelight()
   }
     async presentModal() {
       const modal = await this.modalController.create({
       component: IntoDetialsPage,
       componentProps: { value: 123 }
       });
     
       await modal.present();
       }
}
