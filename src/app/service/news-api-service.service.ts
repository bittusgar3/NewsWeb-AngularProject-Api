import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor(private _http:HttpClient) {

   }
   //NEWS Api URL
   newsApiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d99afdb4e0dc4f829eed90fa769e9642";
   //News India Api  URl
   newsApiURLin = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d99afdb4e0dc4f829eed90fa769e9642';
   //News Tech News Url
   techApiURL= "https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=d99afdb4e0dc4f829eed90fa769e9642";
   //Business
   businessApiURl= 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=d99afdb4e0dc4f829eed90fa769e9642';

   //topHeading()
   toHeading():Observable<any>{
    return this._http.get(this.newsApiURL);
   }

   //Business News()
   businessNews():Observable<any>{
    return this._http.get(this.businessApiURl);
   }

   //india News
   indiaNews():Observable<any>{
    return this._http.get(this.newsApiURLin);
   }

   //technews()
   techNews():Observable<any>{
    return this._http.get(this.techApiURL);
   }


}
