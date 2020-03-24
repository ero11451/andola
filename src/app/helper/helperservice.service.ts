import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class HelperserviceService {

  constructor(private storage: Storage) { }
  
  darktheme(){
   return this.storage.set('darktheme',true)
  }
}
