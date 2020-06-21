import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

	public artist: any = {};
	public loadingArtist: boolean;

  constructor(
  	private activatedRoute:ActivatedRoute,
  	private spotifyService:SpotifyService
  ) { 
		this.loadingArtist = true;
  }

  ngOnInit(): void {
  	this.activatedRoute.params.subscribe(params => {
  		// console.log(params.id)
  		this.getArtista(params.id);
  	});
  }

  getArtista(id:string) {
  	this.spotifyService.getArtista(id)
  		.subscribe(artista => {
  			// console.log(artista);
			this.loadingArtist = false;
  			this.artist = artista;
  		});
  }

}
