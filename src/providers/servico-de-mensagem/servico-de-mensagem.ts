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

  private url: string = "http://localhost:8080/teste";

  constructor(private  http: Http) {
    console.log('Hello ServicoDeMensagemProvider Provider');
  }

  getMessages(){
    return this.http.get(this.url)
    
    .map((res: Response) => res.json())

  }

}
