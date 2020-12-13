import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  
  public infoPersonaje: any; 
  constructor(public apiService: ApiserviceService) { }

  ngOnInit(): void {
   this.infoPersonaje = this.apiService.getInfoPersonaje();
   console.log( 'infoPersonaje',  this.infoPersonaje )
  }

}
