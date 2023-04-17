import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _service:NewsApiServiceService){}

  busninessNewsDisplay:any=[];

  ngOnInit(): void {
    this._service.businessNews().subscribe((reslut)=> {
      this.busninessNewsDisplay= reslut.articles;
    });
  }

}
