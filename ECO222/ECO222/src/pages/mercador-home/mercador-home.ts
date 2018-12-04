import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroDeMercadoriaPage } from '../cadastro-de-mercadoria/cadastro-de-mercadoria';
import { AuthService } from '../../providers/auth/auth-service';
import { DecisaoPage } from '../decisao/decisao';



@IonicPage()
@Component({
  selector: 'page-mercador-home',
  templateUrl: 'mercador-home.html',
})
export class MercadorHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MercadorHomePage');
  }
  
  goToCadastroDeMercadoriaPage(){
    this.navCtrl.push(CadastroDeMercadoriaPage)
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

}
