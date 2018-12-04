import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientePage } from '../pages/cliente/cliente'; 
import { MercadorPage } from '../pages/mercador/mercador';
import { MercadorHomePage } from '../pages/mercador-home/mercador-home';
import { CadastroDeMercadoriaPage } from '../pages/cadastro-de-mercadoria/cadastro-de-mercadoria';
import { ClienteHomePage } from '../pages/cliente-home/cliente-home';
import { ContatosProvider } from '../providers/contatos/contatos';
import { ContactProvider } from '../providers/contact/contact';
import { DecisaoPage } from '../pages/decisao/decisao';

import { ClienteDecisaoPage } from '../pages/cliente-decisao/cliente-decisao';
import { AuthService } from '../providers/auth/auth-service';
import { LoginMercadorPage } from '../pages/login-mercador/login-mercador';
import { SignUpMercadorPage } from '../pages/sign-up-mercador/sign-up-mercador';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { LoginClientePage } from '../pages/login-cliente/login-cliente';
import { VerProdutosPage } from '../pages/ver-produtos/ver-produtos';
import { ContactPage } from '../pages/contact/contact';

//import { AuthService } from '../providers/auth/auth';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientePage,
    MercadorPage,
    MercadorHomePage,
    CadastroDeMercadoriaPage,
    ClienteHomePage,
    DecisaoPage,
    ClienteDecisaoPage,
    LoginMercadorPage,
    SignUpMercadorPage,
    ResetpasswordPage,
    LoginClientePage,
    VerProdutosPage,
    ContactPage
    
    
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
    AngularFireAuthModule,
    
    
    
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
    DecisaoPage,
    ContactPage, 
    ClienteDecisaoPage,
    LoginMercadorPage,
    SignUpMercadorPage,
    ResetpasswordPage,
    LoginClientePage,
    VerProdutosPage
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatosProvider,
    ContactProvider,
    AuthService,
    
  ]
})
export class AppModule {}
