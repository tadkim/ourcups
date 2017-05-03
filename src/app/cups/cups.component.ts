import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';
import { Cup } from '../model/cup';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.css']
})
export class CupsComponent implements OnInit {

  cups: Cup[];

  
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCups();
  }

  getCup(id: number){
    this.appService.getCup(2);
  }

  getCups(){
    this.cups = this.appService.getCups();
  }

  gotoDetail(id: number) {
    let link = ['/detail', id];
    this.router.navigate(link);
  }

  getBg(url: string) {
    let imgUrl = 'url("/images/cups/' + url + '");';
    return imgUrl;
  }

}
