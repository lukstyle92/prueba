import { Component, OnInit } from '@angular/core';
import { ApiBbddService } from '../../services/api-bbdd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta-tarjeta',
  templateUrl: './receta-tarjeta.component.html',
  styles: []
})
export class RecetaTarjetaComponent implements OnInit {
  public recetas: any = {
    errorCode: '',
    msg: '',
    obj: [
      {
        idReceta: '',
        nombre: '',
        tipo: '',
        dificultad: '',
        cantidadComensales: '',
        preparacion: '',
        ingredientes: '',
        imgPath: ''
      }
    ]
  };

  constructor(public apiBbddService: ApiBbddService, private router: Router) {
    this.apiBbddService.getRecetas().subscribe(heroe => {
      this.recetas = heroe;
      console.log(this.recetas);
    });
  }

  ngOnInit() {}

  getRecetas() {}
}

export interface Receta {
  idReceta: number;
  nombre: string;
  tipo: string;
  dificultad: string;
  cantidadComensales: number;
  preparacion: string;
  ingredientes: string;
  img: string;
}
