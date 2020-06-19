import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services';

import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
	public hero: any = {};

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private _heroesService: HeroesService
  ) { 
  	this.activatedRoute.params.subscribe( params => {
  		// console.log(params.id);
  		this.hero = this._heroesService.getHero(params.id);
  	});
  }

  ngOnInit(): void {
  	// console.log(this.hero);
  }

}
