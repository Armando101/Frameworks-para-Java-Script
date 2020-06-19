import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.services';
import { Hero } from '../../models/Hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	public heroes:Hero[];

  constructor(
  	private _heroesService: HeroesService,
  	private router:Router
  ) { }

  ngOnInit(): void {
  	this.heroes = this._heroesService.getHeroes();
  	// console.log(this.heroes);
  }

  /*
  // Ejemplo usando Output
  verHeroe(index: number) {
    this.router.navigate(['/hero', index]);
  }
  */

}
