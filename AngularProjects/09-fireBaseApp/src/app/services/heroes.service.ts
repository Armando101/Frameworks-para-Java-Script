import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://loginapp-da0c1.firebaseio.com';

  constructor(
    private http: HttpClient
  ) { }

  crearHeroe(heroe: HeroeModel): Observable<object> {
    return this.http.post(`${ this.url }/heroes.json`, heroe)
    .pipe(
      map((response: any) => {
        console.log(response);
        heroe.id = response.name;
        return heroe;
      })
    );
  }
}
