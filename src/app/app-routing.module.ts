import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//page
import { AppComponent } from './app.component';
import { CupsComponent } from './cups/cups.component';
import { CupDetailComponent } from './cups/cup-detail/cup-detail.component';

//common
import { Page404Component } from './common/page404/page404.component';


const routes: Routes = [
    { path: '', redirectTo: '/cups', pathMatch: 'full' },
    { path: 'cups', component: CupsComponent },
    { path: 'detail/:id', component: CupDetailComponent },
    { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];