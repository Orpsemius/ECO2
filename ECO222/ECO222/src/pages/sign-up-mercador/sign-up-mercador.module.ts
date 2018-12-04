import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpMercadorPage } from './sign-up-mercador';

@NgModule({
  declarations: [
    SignUpMercadorPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpMercadorPage),
  ],
})
export class SignUpMercadorPageModule {}
