import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  } from 'ionic-angular';
import { ClienteHomePage } from '../cliente-home/cliente-home';
import { MercadorHomePage } from '../mercador-home/mercador-home';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToClientePage(){
    this.navCtrl.setRoot(ClienteHomePage)
  }

  goToMercadorPage(){
    this.navCtrl.setRoot(MercadorHomePage)
  }
}



