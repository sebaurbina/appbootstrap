import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecuperocontrasenaPage } from '../recuperocontrasena/recuperocontrasena';
import { PantallainicialPage } from '../pantallainicial/pantallainicial';



/**
 * Generated class for the LoginemailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginemail',
  templateUrl: 'loginemail.html',
})
export class LoginemailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginemailPage');
  }

  olvidocontrasena(){
    this.navCtrl.push(RecuperocontrasenaPage);
  }

  pantallainicio(){
    this.navCtrl.push(PantallainicialPage);
  }



}
