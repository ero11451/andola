import { Component, OnInit } from '@angular/core';
import { IonichelperService } from 'src/app/helperfunctions/ionichelper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private nav:Router,private ion:IonichelperService) { }
  //  this time should be a variable please do not write any fire base function there
   
  ngOnInit() {
  }
  //  login(home) {
  //    this.ion.Loading("checking data",1000)
  
  //   this.nav.navigate(['home'])
  //   }
}
