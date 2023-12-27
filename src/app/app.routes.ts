import { Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ContactComponent } from './components/contact/contact.component';
// AQUI SE ESPESIFICAN LAS RUTAS CREADAS DENTRO DE el arreglo de Routes separado cada ruta por {} este llevara 2 valores 1ro  path  que sera la ruta ingreasda, 2do el compoennete a renderizar, LO escrito directamente en el app se renderizara al entrar el blog-post, en este caso hasta la imagen del tractor
export const routes: Routes = [{path:'blog-post', title:'Post', component:BlogPostComponent}, {path:'contact', title:'Contact from', component:ContactComponent}];
