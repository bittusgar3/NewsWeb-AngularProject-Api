import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService} from '../service/news-api-service.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
  constructor(private _service:NewsApiServiceService ){}

  techNewsDisplay: any = [];

  ngOnInit(): void {

    this._service.techNews().subscribe((result)=>{
      this.techNewsDisplay = result.articles;
    });

  }
}
