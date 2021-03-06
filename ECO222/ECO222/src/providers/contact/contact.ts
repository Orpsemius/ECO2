import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'


@Injectable()
export class ContactProvider {
  private PATH = 'contacts/';

  constructor(private db: AngularFireDatabase) {
    }

    getAll(){
      return this.db.list(this.PATH)
      .snapshotChanges()
      .map( changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      })
      
    }

    get(key: string) {
      return this.db.object(this.PATH + key)
      .snapshotChanges()
      .map ( c => {
        return {key: c.key, ...c.payload.val() };
      })

    }

    save(contact: any){
      return new Promise ((resolve, reject) => {
        if (contact.key) {
          this.db.list(this.PATH)
          .update(contact.key, {name: contact.name, estabelecimento: contact.estabelecimento, endereco: contact.endereco, complemento:contact.complemento, dia: contact.dia,mes: contact.mes,ano: contact.ano, precoantes: contact.precoantes, precodepois: contact.precodepois})
          .then(() => resolve())
          .catch((e) => reject(e));
        } else{
          this.db.list(this.PATH)
          .push ({name: contact.name, endereco: contact.endereco, estabelecimento: contact.estabelecimento, complemento:contact.complemento, dia: contact.dia,mes: contact.mes,ano: contact.ano, precoantes: contact.precoantes, precodepois: contact.precodepois})
          .then (() => resolve());
        }
      })


    }

    remove(key: string){
      return this.db.list(this.PATH).remove(key);

    }

}
