import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteHomePage } from './cliente-home';

@NgModule({
  declarations: [
    ClienteHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteHomePage),
  ],
})
export class ClienteHomePageModule {}
