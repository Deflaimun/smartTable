import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicoDeMensagemProvider } from '../../providers/servico-de-mensagem/servico-de-mensagem';
import { CodigoPage} from '../codigo/codigo';
import { FilaPage} from '../fila/fila';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private qtd: any;
  private id: any;
  private alocaMesa : string ="alocaMesa";
  private resposta:any;
  

  constructor(private navController: NavController, private servicoDeMensagem: ServicoDeMensagemProvider) {
  }

  // getMessages(){
  //   this.servicoDeMensagem.getMessages().subscribe(data => console.log(data));
  // }

  // getValue(){
  //   console.log(this.qtd);
  // }

   entrar(){
     this.servicoDeMensagem.makeRequest(this.alocaMesa,"qtd",this.qtd,"idCliente",this.id)
     .subscribe(
      data =>{
        let resposta = data.json()
        if (resposta.sucesso == true){
          this.navController.push(CodigoPage,
            resposta)
          console.log(resposta.codigo)
          //joga para pagina de codigo
        }
        else{
          console.log(resposta.qtdMesasAFrente)
          this.navController.push(FilaPage,resposta)
          //joga para página de fila

        }
      } 
     )
     

     //todo: baseado no response, jogar para pagina de código, de fila ou de erro;
   }

  doTest(){
    return this.servicoDeMensagem.doTest().subscribe(data => console.log(data));
    
  }

}
