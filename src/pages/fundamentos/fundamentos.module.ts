import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundamentosPage } from './fundamentos';

@NgModule({
  declarations: [
    FundamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(FundamentosPage),
  ],
})
export class FundamentosPageModule {}
