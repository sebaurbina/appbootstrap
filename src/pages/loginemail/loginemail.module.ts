import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginemailPage } from './loginemail';

@NgModule({
  declarations: [
    LoginemailPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginemailPage),
  ],
})
export class LoginemailPageModule {}
