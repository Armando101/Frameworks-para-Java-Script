import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import { switchAll } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe: HeroeModel = new HeroeModel();

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
  }


  guardar(form: NgForm): any {
    if (form.invalid) {
      console.log('Formulario invalido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroesService.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe(response => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se guardó correctamente',
        icon: 'success'
      });
    });

  }

}
