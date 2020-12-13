import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service'
import { ToastrService } from 'ngx-toastr';
import * as _ from "lodash";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public PersonajesData: any = [];

  constructor(public apiserviceService: ApiserviceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  async getPersonajes() {
    try {
      let response = await this.apiserviceService.getPersonajes();
      let dataReturn = await response.json()
      this.PersonajesData = dataReturn.results;
      console.log('PersonajesData:', this.PersonajesData)
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
