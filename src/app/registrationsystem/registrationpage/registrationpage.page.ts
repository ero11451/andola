import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.page.html',
  styleUrls: ['./registrationpage.page.scss'],
})
export class RegistrationpagePage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {}
   register(usertype){
       this.route.navigate(["register",usertype])
   }
}
