import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OpcionesaccesoPage } from '../pages/opcionesacceso/opcionesacceso';
import { LoginemailPage } from '../pages/loginemail/loginemail';
import { CrearcuentaPage } from '../pages/crearcuenta/crearcuenta';
import { RecuperocontrasenaPage } from '../pages/recuperocontrasena/recuperocontrasena';
import { PantallainicialPage } from '../pages/pantallainicial/pantallainicial';
import { FundamentosPage } from '../pages/fundamentos/fundamentos';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    OpcionesaccesoPage,
    LoginemailPage,
    CrearcuentaPage,
    RecuperocontrasenaPage,
    PantallainicialPage,
    FundamentosPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    OpcionesaccesoPage,
    LoginemailPage,
    CrearcuentaPage,
    RecuperocontrasenaPage,
    PantallainicialPage,
    FundamentosPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
