import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helperfunctions/helper.service';

import { NetworkStatusAngularService } from 'network-status-angular';
import { ConnectionService } from 'ng-connection-service';
@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.page.html',
  styleUrls: ['./registrationpage.page.scss'],
})
export class RegistrationpagePage implements OnInit {
  constructor(private networkStatusAngularService: NetworkStatusAngularService) {
    this.networkStatusAngularService.status.subscribe(status => {
      if (status) {
        console.log("off line")
      } else {
        console.log("online")
      } // returns true if it is online or false if it is offline
    });
  }

  ngOnInit() {
     
   }
  }


