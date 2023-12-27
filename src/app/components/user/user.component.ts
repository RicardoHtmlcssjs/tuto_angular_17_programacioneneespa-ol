import { CommonModule, UpperCasePipe,  } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// los pipes se importa el UpperCasePipe   para poner en mayuscula cualquier texto que queramos

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "Pedro";
  exist = true;
  games = [{id: 0, name: 'Resident evil 7'}, {id: 1, name: 'God of war'}, {id: 2, name: 'Pokemon Lets go pikachu'}]
  isEditable = true;
  onMouseOver(text: string){
    alert(text);
  }
  // ENVIO DE PADRE A HIJO
  @Input() occupation = "";
  // ENVIO DE HIJO  A PADRE
  @Output() greet = new EventEmitter<string>();
  // FUNCION QUE ENVIARA EL MENSAJE DEL HIJO A EL PADRE
  emitToParent(){
    this.greet.emit('Este es el mensaje del hijo');
  }
}
