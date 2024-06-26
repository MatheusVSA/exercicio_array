import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private router: Router) { }

  //função do butão que navega entre as páginas
  navegarPagina01() {
    this.router.navigate(['/home']);
  }
  //função do butão que navega entre as páginas
  navegarPagina02() {
    this.router.navigate(['/fibonacci']);
  }

  ngOnInit() {
  }

  //Inicialização das variáveis e arrays
  quantNumeros:number = 0;
  numero:number = 0;
  recebeNumeros:number[] = [];
  numerosInvertidos:number[] = [];
  quantNumerosDesativada:boolean = false;
  numeroAtivado:boolean = false;

  //Essa função organiza a ordem de interação que o usuário deve seguir
  ativarNumero() {
    this.quantNumerosDesativada = true;
    this.numeroAtivado = true
  }

  //Imsere os numeros dentro do array conforme são digitados
  inserirNumeros(){
    if(this.quantNumeros > this.recebeNumeros.length){
      this.recebeNumeros.push(this.numero);   //adiciona o número informado no array
      this.numero = 0;    //Limpa o campo de entrad apos a inserção
      console.log("Número", this.numero, "inserido com sucesso!")

    }
    else{
      console.log("Todos os números foram inseridos!");
    }
  }

  ordemInversa(){
    //Variáveis auxiliares
    let primeiro = 0;
    let ultimo = this.recebeNumeros.length - 1;
    
    //Faz uma copia do array recebeNumeros para o array numerosInvertidos
    this.numerosInvertidos = [...this.recebeNumeros]

    while(primeiro < ultimo ){
      let temp = this.numerosInvertidos[primeiro];
      this.numerosInvertidos[primeiro] = this.numerosInvertidos[ultimo];
      this.numerosInvertidos[ultimo] = temp;

      primeiro++;
      ultimo--;
    }
    console.log("Números na ordem inversa:", this.recebeNumeros);
  }

  limpar(){
    this.quantNumeros = 0;
    this.numero = 0;
    this.recebeNumeros = [];
    this.numerosInvertidos = [];
    this.quantNumerosDesativada = false;
    this.numeroAtivado = false;
  }

}
