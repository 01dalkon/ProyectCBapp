import { Injectable } from '@angular/core';
import { REGISTRO } from './registro.json';
import { Registro } from './registro';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RegistroService {
  private urlListar:string = 'http://localhost:8080/api/listavehiculo';
  private urlRegistro:string = 'http://localhost:8080/api/ingresovehiculo';
  private urlSalida:string = 'http://localhost:8080/api/salidavehiculo';


  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getRegistro(): Observable<Registro[]> {
    //return of(REGISTRO);
    return this.http.get(this.urlListar).pipe(
    map( (response) => response as Registro[] )
  );
  }

  create(registro: Registro) : Observable<Registro> {
    return this.http.post<Registro>(this.urlRegistro, registro, {headers: this.httpHeaders})
  }

  getRegistros(id): Observable<Registro> {
    return this.http.get<Registro>(`${this.urlListar}/${id}`)
  }

  update(registro: Registro) : Observable<Registro> {
    return this.http.put<Registro>(this.urlSalida, registro, {headers: this.httpHeaders})
  }
}
