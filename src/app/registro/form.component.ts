import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private registro: Registro = new Registro()
  private titulo:string = "Crear Registro"

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
    this.registroService.create(this.registro).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/registro'])
    }, error => {
      alert(error.error.message);
    });
  }

/*
  public updat(): void{
    this.registroService.update(this.registro).subscribe(
      cliente => { this.router.navigate(['/registro'])
    })
  }
*/
/*
  public update(): void{
    this.registroService.update(this.registro).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/registro'])
    }, error => {
      alert(error.error.message);
    });
  }
*/
public update(): void{
  this.registroService.update(this.registro).subscribe((res) => {
    console.log(res);
    this.router.navigate(['/registro'])
  }, error => {
    alert(error.error.message);
  });
}

}
