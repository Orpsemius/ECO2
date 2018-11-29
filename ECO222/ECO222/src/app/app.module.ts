import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/cliente/cliente'; 
import { MercadorPage } from '../pages/mercador/mercador';
import { MercadorHomePage } from '../pages/mercador-home/mercador-home';
import { CadastroDeMercadoriaPage } from '../pages/cadastro-de-mercadoria/cadastro-de-mercadoria';
import { ClienteHomePage } from '../pages/cliente-home/cliente-home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientePage,
    MercadorPage,
    MercadorHomePage,
    CadastroDeMercadoriaPage,
    ClienteHomePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientePage,
    MercadorPage,
    MercadorHomePage,
    CadastroDeMercadoriaPage,
    ClienteHomePage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
