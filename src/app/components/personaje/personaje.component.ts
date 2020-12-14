import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  
  // Variable para información del personaje
  public infoPersonaje: any; 
  
  constructor(public apiService: ApiserviceService) { }

  ngOnInit(): void {
   // Llamado de función que retorna la informacion completa del pesonaje y sus episodios. 
   this.infoPersonaje = this.apiService.getInfoPersonaje();
  }

}
