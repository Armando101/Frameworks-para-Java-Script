import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
  	private httpClient:HttpClient
  ) { }

  getQuery(query: string) {
  	const url = `https://api.spotify.com/v1/${ query }`;
  	
  	const headers = new HttpHeaders({
  		'Authorization': 'Bearer BQBo6_PYjP38UjCYrOHz5HfkU6GafR8RdMhDK7P537Oqu-PkQ634wC3ROMtUahiH3ucXg7gN81-1_wnP0FU',
  	});

  	return this.httpClient.get(url, {headers});
  }

  getNewReleases() {
  	return this.getQuery('browse/new-releases?limit=20')
  		.pipe(map( data => data['albums'].items));
  }

  getArtista(termino: string) {
  	return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
  		.pipe(map( data => data['artists'].items));
  }
}
