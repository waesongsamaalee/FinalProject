
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubjectServiceProvider } from '../../providers/subject-service/subject-service';
import { Subject } from '../../models/subject';
import { Subscription } from 'rxjs/Subscription';




@IonicPage()
@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html',
})
export class GradePage {
  subject: Subject[];
  subs: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public subServPro: SubjectServiceProvider
) {

}
private getSubject(){
  this.subs = this.subServPro.getSubject().subscribe(
    (subjects:Subject[]) => this.subject = subjects
  );
}

ionViewWillEnter(){
  this.getSubject();
}

ionViewWillLeave(){
  this.subs.unsubscribe();
}

}