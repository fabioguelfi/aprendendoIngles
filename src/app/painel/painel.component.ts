import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from './../shared/frase.model';
import FRASES from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: String = 'Traduza a frase:';
  public frases: Frase[] = FRASES;
  public resposta: String = '';

  public rodada: any = 0;
  public rodadaFrase: Frase;

  public progresso: any = 0;

  public tentativas: any = 3;

@Output() public encerrarJogo = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = resposta.target['value'];
  }

  public verificarResposta(): void {
      if (this.rodadaFrase.frasePtBr === this.resposta) {
          /*trocar a rodada*/
          this.rodada++;

          /*progresso*/
          this.progresso = this.progresso + ( 100 / this.frases.length );

          /*fluxo de acertos 100%*/
          if (this.rodada === 4) {
            this.encerrarJogo.emit('vitoria');
          }

          /*atualiza o objeto rodadaFrase*/
          this.atualizaRodada();

      } else {
        /*limpar resposta*/
        this.resposta = '';

        /*decrementa coracao*/
        this.tentativas--;

        if (this.tentativas === -1) {
          this.encerrarJogo.emit('derrota');
        }
      }
  }

  public atualizaRodada(): void {
    /*atualiza o objeto rodadaFrase*/
    this.rodadaFrase = this.frases[this.rodada];
    /*limpar resposta*/
    this.resposta = '';
  }
}
