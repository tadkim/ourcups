import { ViewChild, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TooltipComponent } from '../../common/tooltip/tooltip.component';


import { AppService } from '../../app.service';
import { Cup } from '../../model/cup';

@Component({
  selector: 'app-cup-detail',
  templateUrl: './cup-detail.component.html',
  styleUrls: ['./cup-detail.component.css']
})
export class CupDetailComponent implements OnInit {

  @ViewChild(TooltipComponent) tooltipComponent: TooltipComponent;

  cup: Cup;
  imgPath: string = '../../assets/images';
  
  tooltipPos; //tooltip 위치 저장 객체


  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
    let cupId: number;
    this.activatedRoute.params.forEach((urlParameters) => {
      cupId = parseInt(urlParameters['id']);  
    });

    this.cup = this.appService.getCup(cupId);

    window.scrollTo(0, 0);                  // 초기화시 최 상단으로 이동
    this.getTargetPos();                    // 초기화시 tooltip 대상 요소의 위치 얻기
  }



  onTooltip(act: string) {
    this.getTargetPos();
    this.tooltipComponent.toggle(act);
  }

  


  getTargetPos() {
    let target = document.getElementById('tooltip-stem').getBoundingClientRect();

    let scrollTop = document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
    
    let scrollLeft = document.documentElement.scrollLeft
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
    
    let elementTop = target.top+scrollTop;
    let elementLeft = target.left + scrollLeft;


    let result = { 
      top: elementTop,
      right: target.right,
      bottom: target.bottom,
      left: elementLeft,
      width: target.width,
      height: target.height
    };

    this.tooltipPos = result;
  }

}
