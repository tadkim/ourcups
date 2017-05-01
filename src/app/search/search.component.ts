import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppService } from '../app.service';
import { Cup } from '../model/cup';

//lib
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
    selector: 'search-box',
    template: `
            <img (click)="onSearch()" src="../../assets/images/icons/search.png"/>
            <ng2-completer
                *ngIf="isSearch"
                [(ngModel)]="searchStr" [datasource]="dataService" [minSearchLength]="0"></ng2-completer>
    `,
    styleUrls: ['./search.component.css']
})
    
export class SearchComponent {
    isSearch: boolean = false;
    
  public searchStr: string;
  public dataService: CompleterData;
  public searchData;
    

  constructor(
      private completerService: CompleterService,
      private appService: AppService
  ) {
      this.searchData = this.appService.getCups();
      this.dataService = completerService.local(this.searchData, 'name', 'name'); // data, searchTerm, viewTerm.
  }

  onSearch() {
      this.isSearch = !this.isSearch;

  }  

}