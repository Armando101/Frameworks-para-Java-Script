import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

	public artists: any[] = [];

  constructor(
  	private spotifyService:SpotifyService
  ) { }

  ngOnInit(): void {
  }

  search(termino: string) {
  	// console.log(termino);
  	this.spotifyService.getArtista(termino)
  		.subscribe((data:any) => {
  			console.log(data.artists.items);
  			this.artists = data.artists.items;
  		});
  }

}
