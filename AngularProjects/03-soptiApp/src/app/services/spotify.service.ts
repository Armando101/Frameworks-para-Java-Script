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
  		'Authorization': 'Bearer BQCwUzIZal3hB_UNNGVjonkGY44BKW7vzQaygLoniJXB5kYUre226CqvLge6XeNPEO_cJ0dZXEnioM9u5oc',
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
