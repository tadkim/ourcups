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
    
    
    

    let firstIndex = 0;                     // 첫 index
    let lastIndex = this.cups.length-1;     // 마지막 index   : length는 15지만, id는 14까지있기 때문.
    let curIndex = this.selectedIndex;      // 현재 선택 index
    
    const divideIndex = 7; //어디를 중간으로 할지를 결정하는 기준점.

    let pointPrev = divideIndex;
    let pointNext = 1;
    let count = { prev: 0, next: 0 };


    let prevArr = [];
    let currentArr = [this.cups[curIndex]];
    let nextArr = [];
    
    

    
    
    // prevArr : 0 ~ 7     
    for (let i = 0; i < divideIndex; i++){
      let prev = curIndex - pointPrev;
      if (prev < 0) {
        prev = lastIndex - count.prev;
        count.prev++;
      }
      prevArr.push(this.cups[prev]);
      pointPrev--;
    }


    
    
    (curIndex === 0)
      ? prevArr.sort((a, b) => { return a.id - b.id; })       // 현재 인덱스가 0인 경우
      : isNeedOrdering();                                     // 현재 인덱스가 0이 아닌경우
    
    
    
    
    function isNeedOrdering() {
      let isZero = prevArr.findIndex((el) => { return el.id === 0; });        // id 0 을 찾는다.
      if (isZero !== -1) { reOrdering(); }                                    // 있다면 0 이전 원소만 재정렬한다.

      function reOrdering() { 
          let toSliceArr = prevArr.slice(0, isZero);                          // 이전 목록의 첫 인덱스부터 0인덱싱까지 따로 뽑아 배열 생성.
          toSliceArr.sort((a, b) => { return a.id - b.id; });

          for (let i = 0; i < toSliceArr.length; i++){
            prevArr[i] = toSliceArr[i];
          }  
      }
    }


    
    
    



    // nextArr : 8 to 15
    for (let j = divideIndex; j < lastIndex; j++){
      let next = curIndex+pointNext;
      if (next > lastIndex) {
        next = firstIndex + count.next;
        count.next++;
      }
      nextArr.push(this.cups[next]);
      pointNext++;
    }

    //최종 Arr 형태
    this.reOrderArr = prevArr.concat(currentArr, nextArr);
  }



}