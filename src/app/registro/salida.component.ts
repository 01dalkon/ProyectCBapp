import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html'
})
export class SalidaComponent implements OnInit {

  private registro: Registro = new Registro()
  private titulo:string = "salida vehiculo"

  constructor(private registroService: RegistroService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarRegistro()
  }

  cargarRegistro(): void{
    this.activatedRoute.params.subscribe(params => {
      let placa = params['placa']
      if(placa){
        this.registroService.getRegistros(placa).subscribe( (registro) => this.registro = registro)
     }
    })
  }
  public create(): void{
    this.registroService.create(this.registro).subscribe(
      response => this.router.navigate(['/registro'])
    )
  }

  public update(): void{
    this.registroService.update(this.registro).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/registro'])
    }, error => {
      alert(error.error.message);
    });
  }

}
