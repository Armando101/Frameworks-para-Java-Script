import { Injectable } from '@angular/core';

import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

	private listas: Lista[] = [];

  constructor() {
  	this.cargarStorage();

  	/*const lista1 = new Lista('Aprender diferentes idiomas');
  	const lista2 = new Lista('Sobrevivir al 2020');

  	this.listas.push(lista1, lista2);*/
  }

  getListas(): Lista[] {
  	return this.listas;
  }

  crearLista(title: string) {
  	const nuevaLista = new Lista(title);
  	this.listas.push(nuevaLista);
  	this.guardarStorage();

  	return nuevaLista.id;
  }

  obtenerLista(id: string | number) {
  	id = Number(id);

  	return this.listas.find(listaData => listaData.id === id);
  }

  guardarStorage() {
  	localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
  	if (localStorage.getItem('data')) {
  		this.listas = JSON.parse(localStorage.getItem('data'));
  	} else {
  		this.listas = [];
  	}
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
    this.guardarStorage();
  }
}
