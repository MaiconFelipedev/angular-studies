import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Usuario } from '../shared/model/usuario';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pweb-angular';
  
  usuario!: Usuario; //está fazendo o two-way-data-binding -> está linkado, do html está caindo diretamente aqui
  usuarios!: Array<Usuario>; //dizer o tipo do array <>, aqui eu apenas defini, mas eu tenho que fazer um objeto em memória a partir do new
  //como uma classe posso criar um construtor
  constructor() {
    this.usuario = new Usuario(); //construindo um novo usuario, na memória ram existe esse objeto usuario
    this.usuarios = new Array<Usuario>(); //posso inserir pois existe objeto em memória o qual posso trabalhar
  }

  insertUser(): void{ //espera um tipo de retorno, mas não vai retornar nada
    this.usuarios.push(this.usuario); //array -> estou inserindo o mesmo objeto sempre, apontando para o mesmo objeto em memória Ram, vários ponteiros apontando para o mesmo canto
    this.usuario = new Usuario(); //zero o objeto usuario, começando de novo, limpo e crio novo objeto em memória Ram numa nova posição
  }

}
