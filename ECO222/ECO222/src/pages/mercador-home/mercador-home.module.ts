import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MercadorHomePage } from './mercador-home';

@NgModule({
  declarations: [
    MercadorHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MercadorHomePage),
  ],
})
export class MercadorHomePageModule {}
