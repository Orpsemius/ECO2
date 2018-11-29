import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroDeMercadoriaPage } from '../cadastro-de-mercadoria/cadastro-de-mercadoria';

/**
 * Generated class for the MercadorHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mercador-home',
  templateUrl: 'mercador-home.html',
})
export class MercadorHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MercadorHomePage');
  }
  
  goToCadastroDeMercadoriaPage(){
    this.navCtrl.push(CadastroDeMercadoriaPage)
  }

}
