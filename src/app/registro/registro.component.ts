import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit{

  registro: Registro[];

  constructor(private registroService: RegistroService) { }

  ngOnInit() {
    this.registroService.getRegistro().subscribe(
      registro => { this.registro = registro }
    );
  }

}
