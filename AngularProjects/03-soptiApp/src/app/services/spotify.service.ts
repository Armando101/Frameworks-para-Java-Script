import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
  	private httpClient:HttpClient
  ) { }

  getNewReleases() {
  	const headers = new HttpHeaders({
  		'Authorization': 'Bearer BQBo6_PYjP38UjCYrOHz5HfkU6GafR8RdMhDK7P537Oqu-PkQ634wC3ROMtUahiH3ucXg7gN81-1_wnP0FU',
  	});

  	return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  getArtista(termino: string) {
  	const headers = new HttpHeaders({
  		'Authorization': 'Bearer BQBo6_PYjP38UjCYrOHz5HfkU6GafR8RdMhDK7P537Oqu-PkQ634wC3ROMtUahiH3ucXg7gN81-1_wnP0FU',
  	});

  	return this.httpClient.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }
}
