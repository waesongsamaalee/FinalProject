import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { News } from '../../models/news';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/Observable/ErrorObservable';
import { catchError } from 'rxjs/operators';




@Injectable()
export class NewsServiceProvider {

  urlAPI = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=36ed2f60b40845f9910acab4037a0344';


  constructor(public http: HttpClient) {
    
  }


getNews():Observable<News>{
  return this.http.get<News>(this.urlAPI).pipe(
    catchError(this.handleError)
  )

}
private handleError(error: HttpErrorResponse){
  return new ErrorObservable(error);
}

}
