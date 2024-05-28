import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

//Iniciando variáveis;
  numero01: number = 0;
  numero02: number = 0;
  numero03: number = 0;

  //Array que armazena os números;
  recebeTresNumeros: number[] = [];

  ordemCrescente(){
    //Inicia o array vazio antes de ordenar os números
    this.recebeTresNumeros = [];

    //variáveis para armazenar números
    let primeiro: number;
    let segundo: number;
    let terceiro: number;

    //Tenta encontra o maior número a partir de numero01
    if(this.numero01 >= this.numero02 && this.numero01 >= this.numero03){
      terceiro = this.numero01;   //atribui numero01 a terceiro
      //Encontra o segundo e o primeiro
      if(this.numero02 >= this.numero03){
        segundo = this.numero02;    //atribui numero02 a segundo
        primeiro = this.numero03;   //atribui numero03 a primeiro
      } 
      //Caso a ordem de cima não corresponder inverte o valor do segundo e do primeiro
      else{
        segundo = this.numero03
        primeiro = this.numero02
      }
    } 

    //Procura o maior a partir do numero02
    else if(this.numero02 >= this.numero01 && this.numero02 >= this.numero03){
      terceiro = this.numero02;
      //Encontra o segundo e o primeiro
      if(this.numero01 >= this.numero03){
        segundo = this.numero01;
        primeiro = this.numero03;
      } 
      //Caso a ordem de cima não corresponder inverte o valor do segundo e do primeiro
      else{
        segundo = this.numero03
        primeiro = this.numero01
      }
    }

    //Procura o maior a partir do numero03
    else{
      terceiro = this.numero03;

      //Encontra o segundo e o primeiro
      if(this.numero01 >= this.numero02){
        segundo = this.numero01;
        primeiro = this.numero02;
      } 
      //Caso a ordem de cima não corresponder inverte o valor do segundo e do primeiro
      else{
        segundo = this.numero02
        primeiro = this.numero01
      }
    }
    
    //Insere os números dentro do array de acordo com a ordem crescente 
    this.recebeTresNumeros.push(primeiro, segundo, terceiro);
  }

  ordemDecrescente(){
    //Inicia o array vazio antes de ordenar os números
    this.recebeTresNumeros = [];

    //variáveis para armazenar números
    let primeiro: number;
    let segundo: number;
    let terceiro: number;

    //Tenta encontra o maior número a partir de numero01
    if(this.numero01 >= this.numero02 && this.numero01 >= this.numero03){
      terceiro = this.numero01;   //atribui numero01 a terceiro
      //Encontra o segundo e o primeiro
      if(this.numero02 >= this.numero03){
        segundo = this.numero02;    //atribui numero02 a segundo
        primeiro = this.numero03;   //atribui numero03 a primeiro
      } 
      //Caso a ordem de cima não corresponder inverte o valor do segundo e do primeiro
      else{
        segundo = this.numero03
        primeiro = this.numero02
      }
    } 

    //Procura o maior a partir do numero02
    else if(this.numero02 >= this.numero01 && this.numero02 >= this.numero03){
      terceiro = this.numero02;
      //Encontra o segundo e o primeiro
      if(this.numero01 >= this.numero03){
        segundo = this.numero01;
        primeiro = this.numero03;
      } 
      //Caso a ordem de cima não corresponder inverte o valor do segundo e do primeiro
      else{
        segundo = this.numero03
        primeiro = this.numero01
      }
    }

    //Procura o maior a partir do numero03
    else{
      terceiro = this.numero03;

      //Encontra o segundo e o primeiro
      if(this.numero01 >= this.numero02){
        segundo = this.numero01;
        primeiro = this.numero02;
      } 
      //Caso a ordem de cima não corresponder inverte o valor do segundo e do primeiro
      else{
        segundo = this.numero02
        primeiro = this.numero01
      }
    }

    //Insere os números dentro do array de acordo com a ordem decrescente 
    this.recebeTresNumeros.push(terceiro, segundo, primeiro);
  }

  limpar(){
    this.recebeTresNumeros = [];
    this.numero01 = 0;
    this.numero02 = 0;
    this.numero03 = 0;
  }
}
