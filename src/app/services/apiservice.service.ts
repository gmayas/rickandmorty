import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  // Varible de tipo BehaviorSubject para el almacenaje dinamico y que cualquier componente que lo requiara. 
  private infoPersonaje$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    // Se inicializa vacia 
    this.infoPersonaje$.next(null);
  }

  // Función que retorna la informacion de los personajes (lista)
  getPersonajes() {
    return fetch('https://rickandmortyapi.com/api/character')
  };

  // Función que retorna la informacion de los episodios del personaje (lista)
  getInfo(eipsodeLists: any) {
    return fetch(`https://rickandmortyapi.com/api/episode/${eipsodeLists}`)
  };

  // Función que asigna a la varible la informacion completa del pesonaje y sus episodios
  setInfoPersonaje(personaje: any){
    this.infoPersonaje$.next(personaje);
  }

  // Función que retorna la informacion completa del pesonaje y sus episodios de la varible 
  getInfoPersonaje() {
    return this.infoPersonaje$;
  }

}
