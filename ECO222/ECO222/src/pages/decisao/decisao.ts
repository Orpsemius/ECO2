import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MercadorPage } from '../mercador/mercador';
import { ClientePage } from '../cliente/cliente';
import { ContactPage } from '../contact/contact';
import { ClienteDecisaoPage } from '../cliente-decisao/cliente-decisao';
import { LoginMercadorPage } from '../login-mercador/login-mercador';
import { SignUpMercadorPage } from '../sign-up-mercador/sign-up-mercador';

/**
 * Generated class for the DecisaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decisao',
  templateUrl: 'decisao.html',
})
export class DecisaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToClientePage(){
    this.navCtrl.push(ClienteDecisaoPage)
  }

  goToMercadorPage(){
    this.navCtrl.push(SignUpMercadorPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecisaoPage');
  }

}
