import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,  ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../providers/auth/auth-service';
import { LoginMercadorPage } from '../login-mercador/login-mercador';
import { User } from '../../providers/auth/user';
import { MercadorHomePage } from '../mercador-home/mercador-home';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
@IonicPage()
@Component({
  selector: 'page-sign-up-mercador',
  templateUrl: 'sign-up-mercador.html',
})

export class SignUpMercadorPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController, 
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  createAccount(){
    this.navCtrl.push(LoginMercadorPage)
  }

  resetPassword(){
    this.navCtrl.push(ResetpasswordPage)
  }
    


  signIn(){
    if (this.form.form.valid){
      this.authService.signIn(this.user)
      .then(() =>{
        this.navCtrl.setRoot(MercadorHomePage);
      })
      .catch((error: any) =>{
        let toast = this.toastCtrl.create({duration: 3000, position:'bottom'});
        if (error.code == 'auth/invalid-email'){
          toast.setMessage('E-mail inválido.');
        } else if (error.code == 'auth/user-disabled.'){
          toast.setMessage('Usuário desabilitado');
        } else if (error.code == 'auth/user-not-found'){
          toast.setMessage('Usuário não existe.');
        } else if (error.code == 'auth/wrong-password'){
          toast.setMessage('Senha incorreta.');
        }
        toast.present();
    
      })
    }
  }


}
