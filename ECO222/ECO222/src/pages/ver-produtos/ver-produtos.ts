import { Component } from '@angular/core';
import { IonicPage, NavController,   } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ContactProvider } from '../../providers/contact/contact';


/**
 * Generated class for the VerProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-produtos',
  templateUrl: 'ver-produtos.html',
})
export class VerProdutosPage {
  contacts: Observable<any>;
  
  constructor(
  public navCtrl: NavController,
  private provider: ContactProvider,
    ) {

    this.contacts = this.provider.getAll();
    


}

}
