import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CupsComponent } from './cups/cups.component';
import { CupDetailComponent } from './cups/cup-detail/cup-detail.component';
import { CupSliderComponent } from './cups/cup-slider/cup-slider.component';

//common
import { FooterComponent } from './common/footer/footer.component';
import { Page404Component } from './common/page404/page404.component';

import { AppService } from './app.service';
import { SearchComponent } from './search/search.component';


// lib

import { Ng2CompleterModule } from "ng2-completer";
import { ShareComponent } from './common/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    FooterComponent,
    CupsComponent,
    CupDetailComponent,
    CupSliderComponent,
    SearchComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2CompleterModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
