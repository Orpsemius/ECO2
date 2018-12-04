import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the ClienteDecisaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-decisao',
  templateUrl: 'cliente-decisao.html',
})
export class ClienteDecisaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToContactPage(){
    this.navCtrl.push(ContactPage) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteDecisaoPage');
  }

}
