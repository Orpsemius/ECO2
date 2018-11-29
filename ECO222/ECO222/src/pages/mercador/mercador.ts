import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MercadorHomePage } from '../mercador-home/mercador-home';

/**
 * Generated class for the MercadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mercador',
  templateUrl: 'mercador.html',
})
export class MercadorPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MercadorPage');
  }
  
  goToMercadorHomePage(){
    this.navCtrl.push(MercadorHomePage)
  }
  

}
