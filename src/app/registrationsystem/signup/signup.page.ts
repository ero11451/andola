import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { IonichelperService } from 'src/app/helperfunctions/ionichelper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private nav:Router,private ion:IonichelperService) { }
  userlogin
  ngOnInit() {
  }
  
async  login(home) {
  await this.ion.Loading("checking data",1000)

  return  this.nav.navigate([home])
  }
}
