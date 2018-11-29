import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientePage } from '../cliente/cliente';
import { MercadorPage } from '../mercador/mercador';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToClientePage(){
    this.navCtrl.push(ClientePage)
  }

  goToMercadorPage(){
    this.navCtrl.push(MercadorPage)
  }

}
