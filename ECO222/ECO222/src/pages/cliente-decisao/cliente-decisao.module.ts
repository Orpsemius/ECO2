import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteDecisaoPage } from './cliente-decisao';

@NgModule({
  declarations: [
    ClienteDecisaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteDecisaoPage),
  ],
})
export class ClienteDecisaoPageModule {}
