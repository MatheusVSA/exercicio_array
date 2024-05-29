import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.page.html',
  styleUrls: ['./fibonacci.page.scss'],
})
export class FibonacciPage implements OnInit {

  constructor(private router: Router) { }

  //função do butão que navega entre as páginas
  navegarPagina01() {
    this.router.navigate(['/home']);
  }

  navegarPagina02() {
    this.router.navigate(['/usuario']);
  }

  ngOnInit() {
  }

  numero:number = 0;
  recebeNumeros:number[] = [];

  fibonacci(){
    //caso o valor seja um número negativo ou 0, ele não executara a função
    if(this.numero <= 0){
      console.log("Valor invalido!")
      this.numero = 0;
      return;
    } 

    this.recebeNumeros = [1, 1];   //array sempre inicia com 1 e 1

    //caso o valor informado seja maior que 1 
    for(let i = 2; i < this.numero; i++){
      const nextNumero = this.recebeNumeros[i - 1] + this.recebeNumeros[i - 2];
      this.recebeNumeros.push(nextNumero);
    }
    console.log(this.recebeNumeros);
  }

  limpar(){
    this.numero = 0;
    this.recebeNumeros = [];
  }
}
