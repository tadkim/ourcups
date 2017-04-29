import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AppService } from '../../app.service';
import { Cup } from '../../model/cup';

@Component({
  selector: 'app-cup-detail',
  templateUrl: './cup-detail.component.html',
  styleUrls: ['./cup-detail.component.css']
})
export class CupDetailComponent implements OnInit {
  cup: Cup;
  cupId: number;
  
  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((urlParameters) => {
      this.cupId = parseInt(urlParameters['id']);  
    });

    this.getCup();
  }

  getCup() {
    this.cup = this.appService.getCup(this.cupId);
  }
}
