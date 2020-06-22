import { Injectable } from '@angular/core';

import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

	private listas: Lista[] = [];

  constructor() {
  	const lista1 = new Lista('Aprender diferentes idiomas');
  	const lista2 = new Lista('Sobrevivir al 2020');

  	this.listas.push(lista1, lista2);
  }

  getListas(): Lista[] {
  	return this.listas;
  }
}
