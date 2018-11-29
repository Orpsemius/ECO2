import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroDeMercadoriaPage } from './cadastro-de-mercadoria';

@NgModule({
  declarations: [
    CadastroDeMercadoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroDeMercadoriaPage),
  ],
})
export class CadastroDeMercadoriaPageModule {}
