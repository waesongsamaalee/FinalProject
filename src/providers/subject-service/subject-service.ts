import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../../models/subject';
import { Observable } from 'rxjs/Observable'



@Injectable()
export class SubjectServiceProvider {

  apiKey = 'http://192.168.10.129/data_api/get_subject.php'

  constructor(public http: HttpClient) {
    console.log('Hello SubjectServiceProvider Provider');
  }
  getSubject():Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiKey);
  }

}
