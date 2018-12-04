import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { DecisaoPage } from '../pages/decisao/decisao';
import { AngularFireAuth } from 'angularfire2/auth';


import { ClientePage } from '../pages/cliente/cliente';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth) {
    const authObserver = afAuth.authState.subscribe(user =>{
      if (user){
        this.rootPage = ClientePage ;
        authObserver.unsubscribe();
      } else{
        this.rootPage = DecisaoPage ;
        authObserver.unsubscribe();
      }
    })
    
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

