import { Component, OnInit } from '@angular/core';
import {NewsApiServiceService} from '../service/news-api-service.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit  {

  constructor(private _service:NewsApiServiceService){

  }

  //Display Data
  topHeadingDisplay:any = [];

  ngOnInit(): void {
    this._service.toHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }

}
