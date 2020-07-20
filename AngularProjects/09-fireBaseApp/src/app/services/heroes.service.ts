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

  actualizarHeroe( heroe: HeroeModel ): Observable<object> {
    // Creamos el objeto que vamos a mandar por put
    const heroeTemp = {
      ...heroe
    };

    // Eliminamos la propiedad Id ya que no queremos que esta se envie al backend
    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes(): any {
    return this.http.get(`${this.url}/heroes.json`)
    .pipe(map(this.crearArreglo));
  }

  private crearArreglo(heroesObj: object): HeroeModel[] {
    const heroes: HeroeModel[] = [];
    console.log(heroesObj);
    if ( heroesObj === null) { return []; }

    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;
  }
}
