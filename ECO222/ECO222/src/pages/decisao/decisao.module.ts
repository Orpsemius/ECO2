import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecisaoPage } from './decisao';

@NgModule({
  declarations: [
    DecisaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DecisaoPage),
  ],
})
export class DecisaoPageModule {}
