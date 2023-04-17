import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsApiServiceService} from './service/news-api-service.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { IndiaNewsComponent } from './india-news/india-news.component';
import { BusinessComponent } from './business/business.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechNewsComponent,
    IndiaNewsComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewsApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
