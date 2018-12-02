import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ClientePage } from '../cliente/cliente';
import { MercadorPage } from '../mercador/mercador';
import { ContactProvider } from './../../providers/contact/contact';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  contacts: Observable<any>;
  
    constructor(
    public navCtrl: NavController,
    private provider: ContactProvider,
    private toast: ToastController) {

      this.contacts = this.provider.getAll();
      


  }

  newContact(){
    this.navCtrl.push('ContactPage');
  }

  editContact(contact:any){
    this.navCtrl.push('ContactPage', {contact: contact});

  }

  removeContact(key:string){
    this.provider.remove(key)
    .then(() => {
      this.toast.create({ message: 'Contato removido com sucesso.', duration:3000}).present();
    })
    .catch(() =>{
      this.toast.create({ message: 'Erro ao remover o contato.', duration:3000}).present;
    })
  }

  goToClientePage(){
    this.navCtrl.push(ClientePage)
  }

  goToMercadorPage(){
    this.navCtrl.push(MercadorPage)
  }

}
