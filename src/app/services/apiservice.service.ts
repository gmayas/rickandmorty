import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private infoPersonaje$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.infoPersonaje$.next(null);
  }

  getPersonajes() {
    return fetch('https://rickandmortyapi.com/api/character')
  };

  getInfo(eipsodeLists: any) {
    return fetch(`https://rickandmortyapi.com/api/episode/${eipsodeLists}`)
  };

  setInfoPersonaje(personaje: any){
    this.infoPersonaje$.next(personaje);
  }

  getInfoPersonaje() {
    return this.infoPersonaje$;
  }

}
