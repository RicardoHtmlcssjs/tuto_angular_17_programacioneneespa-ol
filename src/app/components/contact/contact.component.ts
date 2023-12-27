import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// IMPORTACION DEL FormsModule PARA LA INTERACION DE FORMULARIOS
// FormGroup es para espesificar que tiene un fgrupo de formulario es decir un formulario con varios inputs
// FormControl  es para espesificar y dirigirse a casa input del formulario
// pero ninguno de estos tiene que estar importado en ele decoradr @component
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  favoriteFramework = '';
  // creacion de obgeto que inicializara el formulario de grupo deve tener el mismo valor del formulario grupo
  contactForm = new FormGroup({
    // hay que espesificar cada formulario de control este se refiere al input del formulario por mesio de formControlName="nombre_input, esta declarado en blanco por que se le puede agregar un balor por defecto, en este caso en blanco"
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  handleConstactFormSubmit(){
    alert(this.contactForm.value);
  }
}
