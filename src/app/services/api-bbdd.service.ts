import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Receta } from '../components/receta-tarjeta/receta-tarjeta.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiBbddService {
  private respuesta: any;
  // devuelve un json con todas las recetas que hay en bbdd
  readonly GET_RECETAS_URL: string =
    //'http://localhost:8080/recetas/rest/servicios/listareceta';
    'http://localhost:8080/recetas/rest/servicios/cross';
  // devuelve json con receta aleatoria
  readonly GET_RETECA_ALEATORIA: string =
    'http://localhost:8080/recetas/rest/servicios/aleatorio';
  // busca y devuelve una lista con todas las recetas que contenian el ingrediente pasado por parametro
  readonly GET_RETECAS_POR_INGREDIENTE: string =
    'http://localhost:8080/recetas/rest/servicios/buscar?ingrediente=';
  // añade receta a base de datos
  readonly POST_ADD_RECETA: string =
    'http://localhost:8080/recetas/rest/servicios/add';
  // recibe todos los parametros de una receta y la modifica
  readonly POST_EDITAR_RECETA: string =
    'http://localhost:8080/recetas/rest/servicios/edit';
  //public recetas: Receta[] = {};

  posts: any;

  constructor(private http: HttpClient) {
    console.log('Servicio lucas listo!');
  }

  getRespuesta() {
    console.log(this.respuesta);
    return this.respuesta;
  }

  getRecetas() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.GET_RECETAS_URL).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }
}
