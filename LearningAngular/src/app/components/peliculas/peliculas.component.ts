import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

	public titulo: string;
  public peliculas: Array<any>;

	// En el constructor se asignan valores a las propiedades
	// No es buena práctica agregar lógica aquí, eso va en el OnInit
  constructor() {
  	this.titulo = 'Componente película';
    this.peliculas = [
      {title: "Requiem for a dream", image: 'https://images-na.ssl-images-amazon.com/images/I/81OOo4oFkcL._SL1500_.jpg'},
      {title: "Harry Potter y el prisionero de Azcaban", image: 'https://es.web.img2.acsta.net/pictures/14/04/30/11/36/185120.jpg'},
      {title: "Psicosis", image: 'https://diariodefriki.files.wordpress.com/2017/10/psycho-559c10640aba2.jpg?w=210&h=300'}
    ];
    // console.log('Constructor lanzado');
  }

  // OnInit es un hook que se ejecuta cuando cargamos la etiqueta
  // Se ejecuta después del constructor
  ngOnInit(): void {
  	console.log('Componente iniciado');
  }

  // Este hook se ejecuta cuando hay un cambio
  ngDoCheck() {
  	console.log('DoCheck lanzado');
  }

  // Creo un método que se active cuando pulso el botón
  cambiarTitulo() {
  	this.titulo = "Titulo cambiado";
  }

  // Este hook se ejecuta antes de elminiar un componente
  ngOnDestroy() {
  	console.log('El componente se eliminará de la ejecución');
  }
}
