import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MercadorPage } from './mercador';

@NgModule({
  declarations: [
    MercadorPage,
  ],
  imports: [
    IonicPageModule.forChild(MercadorPage),
  ],
})
export class MercadorPageModule {}
