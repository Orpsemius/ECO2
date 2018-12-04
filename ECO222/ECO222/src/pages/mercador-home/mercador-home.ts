import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { DecisaoPage } from '../decisao/decisao';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';



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
    this.navCtrl.push(HomePage)
  }

}
