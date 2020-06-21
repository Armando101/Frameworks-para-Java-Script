import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

	public newSongs: any[];
  public loading: boolean;

  constructor(
  	private spotifyService:SpotifyService
  ) { 
    this.loading = true;
  }

  ngOnInit(): void {
  	this.spotifyService.getNewReleases()
  		.subscribe((data:any) => {
  			// console.log(data.albums.items);
  			this.newSongs = data;
        this.loading = false;
  		});
  }

}
