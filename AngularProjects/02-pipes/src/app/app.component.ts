import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*
Para soportar varios idiomas
ng add @angular/localize

// Es necesario cambiar el app.module.ts
*/
export class AppComponent {
  title = 'pipes';

  public nombre = 'Capitán América';
  public nombre2 = 'ArMaNdO RiVeRa';

  public arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public PI:number = Math.PI;
  public porcentaje: number = 0.487;
  public salario: number = 40543;
  public fecha: Date = new Date();
  public idioma: string = 'es';
  public myVideo: string = 'https://www.youtube.com/embed/AqP8xLF3TE4';
  public activar: boolean = true;
  public valorPromesa = new Promise<string>((resolve) => {
  	setTimeout(() => {
  		resolve('Data');
  	}, 2000);
  })
  public heroe = {
  	nombre: 'Logan',
  	clave: 'Wolverine',
  	edad: 500,
  	direccion: {
  		calle: 'Primera',
  		casa: 20
  	}
  }

  cambiarIdioma(idioma:string) {
  	this.idioma = idioma;
  }

  togglePassword() {
  	this.activar ? this.activar=false : this.activar=true;
  }
}
