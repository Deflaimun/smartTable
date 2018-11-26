import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicoDeMensagemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicoDeMensagemProvider {

  private url: string = `http://localhost:8080/`;

  constructor(private  http: Http) {
    console.log('Hello ServicoDeMensagemProvider Provider');
  }

  // getMessages(){
  //   return this.http.get(this.url)
    
  //   .map((res) => res.json())

  // }

  // makeRequest(request,nomeParam, param,nomeParam2,idCliente){
  //   return this.http.get(this.url+request+"?"+nomeParam+"="+param+"&" +nomeParam2 + "=" +idCliente)
  //   .do((res) => res.json())
  // }

  doTest(){
    return this.http.get(this.url+"teste")
    .do((res: Response) => console.log(res))

    
  }


  

}
