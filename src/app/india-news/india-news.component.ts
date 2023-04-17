import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-india-news',
  templateUrl: './india-news.component.html',
  styleUrls: ['./india-news.component.css']
})
export class IndiaNewsComponent implements OnInit {

  constructor(private _service:NewsApiServiceService){

  }

  indiaNewsDisplay:any= [];

  ngOnInit(): void {
    this._service.indiaNews().subscribe((reslut)=>{
      this.indiaNewsDisplay = reslut.articles;
    });
  }

}
