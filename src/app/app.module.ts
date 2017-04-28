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


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    FooterComponent,
    CupsComponent,
    CupDetailComponent,
    CupSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
