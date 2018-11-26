import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicoDeMensagemProvider } from '../../providers/servico-de-mensagem/servico-de-mensagem';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mes: any;


  constructor(private navController: NavController, private servicoDeMensagem: ServicoDeMensagemProvider) {
   
  }

  getMessages(){
    this.servicoDeMensagem.getMessages().subscribe(data => console.log(data));
  }

  getValue(){
    console.log(this.mes);
  }

}
