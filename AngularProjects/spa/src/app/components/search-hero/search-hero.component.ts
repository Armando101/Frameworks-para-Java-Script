import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.services';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {

	public termino: string;
	public heroes:Hero[];

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private _heroesService: HeroesService,
  ) {
  	this.activatedRoute.params.subscribe( params => {
  		// console.log(params.termino);
  		this.heroes = this._heroesService.buscarHeroes(params.termino);
  		this.termino = params.termino;
  	});
  }

  ngOnInit(): void {
  	// console.log(this.heroes);
  }

}
