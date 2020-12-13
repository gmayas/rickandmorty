import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor() { }

  getPersonajes() {
      return fetch('https://rickandmortyapi.com/api/character')
  };
  
}
