import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';
import { MercadorHomePage } from '../mercador-home/mercador-home';


@IonicPage()
@Component({
  selector: 'page-login-mercador',
  templateUrl: 'login-mercador.html',
})
export class LoginMercadorPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController, 
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  signIn(){
    if (this.form.form.valid){
      let toast = this.toastCtrl.create ({ duration: 3000, position: 'bottom'})
      this.authService.createUser(this.user)

      .then((user: any) =>{

        toast.setMessage('Usuário criado com sucesso.')
        toast.present();
        this.navCtrl.setRoot(MercadorHomePage);

      })
      .catch((error: any) => {
        if (error.code  == 'auth/email-already-in-use') {
          toast.setMessage('O e-mail digitado já está em uso.');
        } else if (error.code  == 'auth/invalid-email') {
          toast.setMessage('O e-mail digitado não é valido.');
        } else if (error.code  == 'auth/operation-not-allowed') {
          toast.setMessage('Não está habilitado criar usuários.');
        } else if (error.code  == 'auth/weak-password') {
          toast.setMessage('A senha digitada é muito fraca.');
        }
        toast.present();
      });    
    }

  }

  

}
