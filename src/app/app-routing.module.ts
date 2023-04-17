import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { IndiaNewsComponent } from './india-news/india-news.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path: '', component:TopHeadingComponent}, //Home
  {path: 'india', component:IndiaNewsComponent}, //India
  {path: 'business', component:BusinessComponent}, //Business
  {path: 'tech', component:TechNewsComponent}, //tech News

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
