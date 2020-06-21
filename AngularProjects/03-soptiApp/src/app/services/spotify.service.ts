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
  		'Authorization': 'Bearer BQCwOHrqT2lpyebVbOIZPXLAbBcp-DfIzGtqT_EcaWI5b54hM3o531Y0o16r9zEMuRb5FOxuj0MVT7JFoKQ',
  	});

  	return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
