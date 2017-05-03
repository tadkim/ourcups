import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  constructor() {}
  ngOnInit() { }
  

  isTooltip: boolean = false;
  elPos;                                              // tooltip's position.

  size = { w: 300, h: 200 };                          // tooltip size
  margin = { top: 0, right: 0, bottom: 30, left: 0 }; // tooltip margin. (not css)

  
  @Input()
  set pos(value: any) {
    this.elPos = value;
    this.elPos.top = (this.elPos.top - this.size.h - this.margin.bottom);
    this.elPos.left = (this.elPos.left - (this.size.w / 2)) + this.elPos.width;
  };

  toggle(act: string) {
    (act === 'on') ? this.isTooltip = true : this.isTooltip = false;
  }


}
