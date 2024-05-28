import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

}
