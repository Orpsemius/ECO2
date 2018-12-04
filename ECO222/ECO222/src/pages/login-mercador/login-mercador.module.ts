import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginMercadorPage } from './login-mercador';

@NgModule({
  declarations: [
    LoginMercadorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginMercadorPage),
  ],
})
export class LoginMercadorPageModule {}
