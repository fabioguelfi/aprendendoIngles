import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from './../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

@Input() public tentativas: any = 0;

  public coracoes: Coracao[] = [
    new Coracao(true),  new Coracao(true), new Coracao(true)
  ]

  constructor() {
  }

  // durante o processo de decoracao de valor dos componentes pais pros filhos, quando os valores recebidos sao alterados este metodo tambem é chamado
  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas;
      this.coracoes[ indice - 1 ].cheio = false;
    }
  }

  ngOnInit() {
  }



}
