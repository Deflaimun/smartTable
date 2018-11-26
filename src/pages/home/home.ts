import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicoDeMensagemProvider } from '../../providers/servico-de-mensagem/servico-de-mensagem';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private qtd: any;
  private alocaMesa : string ="alocaMesa";

  constructor(private navController: NavController, private servicoDeMensagem: ServicoDeMensagemProvider) {
  }

  // getMessages(){
  //   this.servicoDeMensagem.getMessages().subscribe(data => console.log(data));
  // }

  // getValue(){
  //   console.log(this.qtd);
  // }

  // entrar(){
  //   this.servicoDeMensagem.makeRequest(this.alocaMesa,"qtd",this.qtd,"idCliente",1)
  //   .map((res: Response) => res.json())
  //   //todo: baseado no response, jogar para pagina de código, de fila ou de erro;
  // }

  doTest(){
    return this.servicoDeMensagem.doTest().subscribe(data => console.log(data));
    
  }

}
