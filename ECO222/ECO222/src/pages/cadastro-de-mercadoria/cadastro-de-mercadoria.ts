import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroDeMercadoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-de-mercadoria',
  templateUrl: 'cadastro-de-mercadoria.html',
})
export class CadastroDeMercadoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCrtl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroDeMercadoriaPage');
  }

  cadastroEfetuado(){
    const alert = this.alertCrtl.create({
      title: "",
      subTitle: "Produto cadastrado com sucesso",
      buttons: ['OK']
    });
    alert.present();
  }

}
