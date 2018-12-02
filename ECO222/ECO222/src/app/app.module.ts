import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/cliente/cliente'; 
import { MercadorPage } from '../pages/mercador/mercador';
import { MercadorHomePage } from '../pages/mercador-home/mercador-home';
import { CadastroDeMercadoriaPage } from '../pages/cadastro-de-mercadoria/cadastro-de-mercadoria';
import { ClienteHomePage } from '../pages/cliente-home/cliente-home';
import { ContatosProvider } from '../providers/contatos/contatos';
import { ContactProvider } from '../providers/contact/contact';


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
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDBdPNAfFpvwmkhWAQcvTGs4xwyGlff7CI",
    authDomain: "eco2-3d45d.firebaseapp.com",
    databaseURL: "https://eco2-3d45d.firebaseio.com",
    projectId: "eco2-3d45d",
    storageBucket: "eco2-3d45d.appspot.com",
    messagingSenderId: "36591106240"
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientePage,
    MercadorPage,
    MercadorHomePage,
    CadastroDeMercadoriaPage,
    ClienteHomePage,
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatosProvider,
    ContactProvider
  ]
})
export class AppModule {}
