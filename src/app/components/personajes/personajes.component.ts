import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service'
import { ToastrService } from 'ngx-toastr';
import * as _ from "lodash";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  
  //Array para mostrar la lista de los personajes (*ngFor)
  public PersonajesData: any = []; 

  constructor(public apiService: ApiserviceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // Llamado inicial de la funcion
    this.getPersonajes();
  }
 
  // Función asincrona para obtener el listado de los personajes provenientes del apiServices
  async getPersonajes() {
    try {
      let response = await this.apiService.getPersonajes();
      let dataReturn = await response.json()
      this.PersonajesData = dataReturn.results;
      this.toastr.success('Hola, excelente.', 'Aviso de Rick and Morty', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      });
    } catch (e) {
      this.toastr.error('Hola, creo que algo salio mal. ', 'Aviso de Rick and Morty', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      })
      console.log('Error respose: ', e)
    }
  }

 // Función asincrona para obtener la informacion completa del personaje proveniente del apiServices
 async getInfo(personaje: any) {
    try {
      let eipsodeListUrls = personaje.episode;
      let eipsodeLists = [];
      let episodeDataList = [];
      eipsodeListUrls.map((currentValue: any) => {
        let data = currentValue.substr(32).replace('episode/', '');
        eipsodeLists.push(data)
      });
      let response = await this.apiService.getInfo(eipsodeLists.join());
      let dataReturn = await response.json();
      // Valida si dataReturn es un array
      if (_.isArray(dataReturn)) {  episodeDataList = dataReturn } else {  episodeDataList.push(dataReturn) };
      personaje =  Object.assign(personaje, { episodeData: episodeDataList });
      this.apiService.setInfoPersonaje(personaje);
      this.router.navigate(['personaje']);
      this.toastr.success('Hola, excelente.', 'Aviso de Rick and Morty', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      });
    } catch (e) {
      this.toastr.error('Hola, creo que algo salio mal. ', 'Aviso de Rick and Morty', {
        timeOut: 10000,
        positionClass: 'toast-bottom-right'
      })
      console.log('Error respose: ', e)
    }
  }
}
