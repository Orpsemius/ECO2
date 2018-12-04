import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { DecisaoPage } from '../decisao/decisao';
import { ContactPage } from '../contact/contact';

import { VerProdutosPage } from '../ver-produtos/ver-produtos';



@IonicPage()
@Component({
  selector: 'page-cliente-home',
  templateUrl: 'cliente-home.html',
})
export class ClienteHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MercadorHomePage');
  }
  
  goToCadastroDeMercadoriaPage(){
    this.navCtrl.push(ContactPage)
  }
  signOut(){
    this.authService.signOut()
    .then(() => {
      this.navCtrl.setRoot(DecisaoPage);
    })
    .catch((error) =>{
      console.error(error);
    })
  }
  verMercadoria(){
    this.navCtrl.push(VerProdutosPage)
  }

}