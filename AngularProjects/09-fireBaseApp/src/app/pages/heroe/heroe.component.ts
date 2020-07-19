import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

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
    console.log(form);
    console.log(this.heroe);

    this.heroesService.crearHeroe(this.heroe)
      .subscribe(response => {
        console.log(response);
      });

  }

}
