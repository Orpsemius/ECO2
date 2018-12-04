import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpMercadorPage } from '../sign-up-mercador/sign-up-mercador';
import { LoginClientePage } from '../login-cliente/login-cliente';

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
    this.navCtrl.push(LoginClientePage)
  }

  goToMercadorPage(){
    this.navCtrl.push(SignUpMercadorPage)
  }



}
