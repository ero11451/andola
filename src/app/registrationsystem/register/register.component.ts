import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  usertype
  constructor(  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.usertype = this.route.snapshot.paramMap.get('usertype');
      
  }

}
