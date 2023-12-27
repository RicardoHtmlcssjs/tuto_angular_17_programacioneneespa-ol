import { Component } from '@angular/core';
// componente de optimizacion de imagenes
import { CommonModule, NgOptimizedImage } from '@angular/common';
// RouterLink  importacion que acmita los link del nav
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from './components/comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent, NgOptimizedImage, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17-sergie-code';
  userOccupation = "Envio de padre a hijo con @hijo";

  // FUNCION QUE RECIVE MENSAJE DEL COMPONENTE HIJO CON @OUTPUT
  mensajeAlPadre = "Mensaje del hijo a el padre";
  reciveEmision($event: string){
    this.mensajeAlPadre = $event;
  }
}
