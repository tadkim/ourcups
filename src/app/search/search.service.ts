import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AppService } from '../app.service';

import { Cup } from '../model/cup';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Cup[]> {
    return this.http
               .get(`app/cups/?name=${term}`)
               .map(response => response.json().data as Cup[]);
  }
}
