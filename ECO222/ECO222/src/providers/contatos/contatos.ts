import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'


@Injectable()
export class ContatosProvider {

  constructor(private db: AngularFireDatabase) {
    
  }

}
