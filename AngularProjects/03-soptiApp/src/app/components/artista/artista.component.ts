import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

	public artist: any = {};
	public topTracks: any[] = [];
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
  		this.getTopTracks(params.id);
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

  getTopTracks(id:string) {
  	this.spotifyService.getTopTracks(id)
  		.subscribe(topTracks => {
  			console.log(topTracks);
  			this.topTracks = topTracks;
  		});
  }

}
