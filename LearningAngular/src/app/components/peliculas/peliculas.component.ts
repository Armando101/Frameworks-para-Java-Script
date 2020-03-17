import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

	public titulo: string;

	// En el constructor se asignan valores a las propiedades
	// No es buena práctica agregar lógica aquí, eso va en el OnInit
  constructor() { 
  	this.titulo = 'Componente película';
  	console.log('Constructor lanzado');
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
