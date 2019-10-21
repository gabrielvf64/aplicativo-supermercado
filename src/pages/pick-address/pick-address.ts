import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Gastão Gonçalves",
        numero: "79",
        complemento: "Bloco A",
        bairro: "Santa Rosa",
        cep: "24240030",
        cidade: {
          id: "1",
          nome: "Niterói",
          estado: {
            id: "1",
            nome: "Rio de Janeiro"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua Doze",
        numero: "10",
        complemento: null,
        bairro: "Itaipuaçu",
        cep: "24900000",
        cidade: {
          id: "2",
          nome: "Maricá",
          estado: {
            id: "1",
            nome: "Rio de Janeiro"
          }
        }
      }
    ];
  }
}
