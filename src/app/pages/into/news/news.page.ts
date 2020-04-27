import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private nav:Router,private theme:ThemeService) { }

  ngOnInit() {
  }
  detailpage(){
   this.nav.navigate(["infodetials"])
  }
  enabledark(){
    this.theme.enabledark()
   }
   enablelight(){
     this.theme.enablelight()
   }
}
