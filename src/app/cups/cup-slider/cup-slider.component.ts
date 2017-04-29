import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cup } from '../../model/cup';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-cup-slider',
  templateUrl: './cup-slider.component.html',
  styleUrls: ['./cup-slider.component.css']
})
export class CupSliderComponent implements OnInit {

  cups: Cup[];
  reOrderArr = [];

  selectedIndex: number;
  
  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((urlParameters) => {
      this.selectedIndex = parseInt(urlParameters['id']);
    });
    this.cups = this.appService.getCups();
    
    this.setReOrder();
    
  }

  setReOrder() {
    
    let count = { prev: 0, next: 0 };
    let firstIndex = 0;
    let lastIndex = this.cups.length-1;
    let curIndex = this.selectedIndex;
    

    let compute = 0;
    let pointPrev = 8;
    let pointNext = 1;


    
    // 새롭게 정렬한 cup 을 넣을 배열 생성
    // 0 to 7     
    for (let i = 0; i < 8; i++){
      let prev = curIndex - pointPrev;
      
      if (prev < 0) {
        prev = lastIndex - count.prev;
        count.prev++;
      }
      console.log(prev);
      this.reOrderArr.push(this.appService.getCup(prev));
      pointPrev--;
    }
    // 현재 선택한 cup. (가운데 배치하기 위함)
    this.reOrderArr.push(this.appService.getCup(curIndex));




    // 8 to 15
    for (let j = 8; j < lastIndex; j++){
      let next = curIndex+pointNext;
      if (next > lastIndex) {
        next = firstIndex + count.next;
        count.next++;
      }
      console.log(next);
      this.reOrderArr.push(this.appService.getCup(next));
      pointNext++;
    }


    console.log(this.cups[curIndex]);

    for (let index = 0; index < this.reOrderArr.length; index++){
      console.log(this.reOrderArr[index].name);
    }
  }



}