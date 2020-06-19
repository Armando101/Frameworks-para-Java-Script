import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

	@Input() hero: any = {};
	@Input() index: number;

	/*@Output() heroeSeleccionado: EventEmitter<number>;*/

  constructor(
  	private router: Router
  ) { 
  	/*this.heroeSeleccionado = new EventEmitter();*/
  }

  ngOnInit(): void {
  }

  verHeroe() {
  	this.router.navigate(['/hero', this.index]);
  	/* // Con Output
  	this.heroeSeleccionado.emit(this.index);*/
  }

}
