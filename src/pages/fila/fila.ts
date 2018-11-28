import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the FilaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fila',
  templateUrl: 'fila.html',
})
export class FilaPage {

  resposta: any;
  qnt: number;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.resposta = this.navParams.data;
    this.qnt = this.resposta.qtdMesasAFrente;
    
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilaPage');
  }

}
