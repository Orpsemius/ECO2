import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  title :string;
  form: FormGroup;
  contact: any;
  


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private provider: ContactProvider,
    private toast: ToastController) {

      this.contact = this.navParams.data.contact || {};
      this.createForm();
      this.setupPageTitle();
      
  }

  private setupPageTitle(){
    this.title = this.navParams.data.contact ? 'Alterando contato' : 'Novo contato';

  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      name: [this.contact.name, Validators.required],
      endereco: [this.contact.endereco, Validators.required],
      //vencimento: [this.contact.vencimento, Validators.required],
      dia: [this.contact.dia, Validators.required],
      mes: [this.contact.mes, Validators.required],
      ano: [this.contact.ano, Validators.required],
      precoantes: [this.contact.precoantes, Validators.required],
      precodepois: [this.contact.precodepois, Validators.required],
      
    })
  }

  onSubmit(){
    if (this.form.valid) {
      this.provider.save(this.form.value)
      .then(() => {
        this.toast.create({message: 'Contato salvo com sucesso.', duration:3000}) .present();
        this.navCtrl.pop();        
      })
      .catch((e) =>{
        this.toast.create({message: 'Erro ao salvar contato.', duration:3000}) .present();
        console.error(e);  
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
