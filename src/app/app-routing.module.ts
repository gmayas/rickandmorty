import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  { path: '', component:  PersonajesComponent },
  { path: 'personaje', component:  PersonajeComponent },
  { path: 'about', component:  AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
