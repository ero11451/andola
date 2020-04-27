import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController, ActionSheetController, PopoverController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonichelperService {

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private popoverController: PopoverController,
    private modalController: ModalController
    ) { }

  async  toastmessage(message,time,postion,color) {
    const toast = await this.toastController.create({
      message: message,
      duration: time,
      color:color,
      position:postion
    });
    toast.present();
  }
  async Loading(message,duration) {
    const loading = await this.loadingController.create({
      message: message,
      duration: duration,
      spinner: "circular",
      
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
 
  }
 async Alert(header,subHeader,message,buttons) {
   const alert = await this.alertController.create({
     header: header,
     subHeader: subHeader,
     message: message,
     buttons: buttons
   });
   await alert.present();
 }
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Albums',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });

  await actionSheet.present();
}

async Popover(ev: any, component) {
  const popover = await this.popoverController.create({
    component: component,
    event: ev,
    translucent: false
  });

  await popover.present();
}
async modal(page) {
  const modal = await this.modalController.create({
  component: page,
  componentProps: { value: 123 }
  });

  await modal.present();

}
}
