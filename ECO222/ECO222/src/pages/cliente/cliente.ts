import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ClienteHomePage } from '../cliente-home/cliente-home';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  goToClienteHome(){
    this.navCtrl.push(ClienteHomePage)
  }

  /*showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mensagem',
      subTitle: 'Você logou!',
      buttons: ['OK']
    });
    alert.present();
  }*/

}
