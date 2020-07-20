import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: HeroeModel[] = [];
  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe(response => {
      // console.log(response);  // Array de objetos
      this.heroes = response;
    });
  }

  borrarHeroe(heroe: HeroeModel, i: number): void {

    Swal.fire({
      title: 'Esta seguro?',
      text: `Esta seguro que desea borrar a ${ heroe.nombre }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( response => {
      if (response.value) {
        this.heroes.splice(i, 1); // Elimino del arrglo
        this.heroesService.borrarHeroe(heroe.id).subscribe();
      }
    });
  }

}
