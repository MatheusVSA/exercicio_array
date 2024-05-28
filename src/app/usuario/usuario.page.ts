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

  inserirNumeros(){
    if(this.quantNumeros > this.recebeNumeros.length){
      this.recebeNumeros.push(this.numero);
      console.log("Número", this.numero, "inserido com sucesso!")

    }
    else{
      console.log("Todos os números foram inseridos!");
    }
  }
}
