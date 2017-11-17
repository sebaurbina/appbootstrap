import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpcionesaccesoPage } from '../opcionesacceso/opcionesacceso';
import { LoginemailPage } from '../loginemail/loginemail';
import { CrearcuentaPage } from '../crearcuenta/crearcuenta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  formasLoguin(){
    this.navCtrl.push(OpcionesaccesoPage);
  }

  loginEmail(){
    this.navCtrl.push(LoginemailPage);
  }

  crearunacuenta(){
    this.navCtrl.push(CrearcuentaPage);
  }

}
