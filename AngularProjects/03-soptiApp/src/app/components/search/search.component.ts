import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

	public artists: any[] = [];
  public loading: boolean;

  constructor(
  	private spotifyService:SpotifyService
  ) { 
  }

  ngOnInit(): void {
  }

  search(termino: string) {
  	if (termino) {
	  	// console.log(termino);
	  	this.loading = true;
	  	this.spotifyService.getArtista(termino)
	  		.subscribe((data:any) => {
	  			// console.log(data);
	  			this.loading = false;
	  			this.artists = data;
  		});
  	}
  }

}
