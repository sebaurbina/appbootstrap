import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FundamentosPage } from '../fundamentos/fundamentos';
import { Examenu1p1Page } from '../examenu1p1/examenu1p1';

/**
 * Generated class for the PantallainicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pantallainicial',
  templateUrl: 'pantallainicial.html',
})
export class PantallainicialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallainicialPage');
  }

  fundamentos(){
    this.navCtrl.push(FundamentosPage);
  }

  examen(){
    this.navCtrl.push(Examenu1p1Page);
  }

}
