import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Examenu1p1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examenu1p1',
  templateUrl: 'examenu1p1.html',
})
export class Examenu1p1Page {

  //correcto:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.correcto = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Examenu1p1Page');
  }

}
