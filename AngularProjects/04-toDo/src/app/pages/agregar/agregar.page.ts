import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

	public lista: Lista;
	public nombreItem:string;

  constructor(
  	private deseosService:DeseosService,
  	private route: ActivatedRoute
  ) { 

  	const listaId = this.route.snapshot.paramMap.get('listaId');
  	this.lista = deseosService.obtenerLista(listaId);
  	// console.log(this.lista);
  }

  ngOnInit() {
  }

  agregarItem() {
  	if (this.nombreItem.length === 0) {
  		return;
  	}

  	const nuevoItem = new ListaItem(this.nombreItem);
  	this.lista.items.push(nuevoItem);

  	this.nombreItem = '';
  	this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
  	// console.log(item);
  	const pendientes = this.lista.items
  							.filter(itemData => !itemData.done)
  							.length;

  	// console.log({pendientes});

  	if (pendientes === 0) {
  		this.lista.finishDate = new Date();
  		this.lista.done = true;
  	} else {
  		this.lista.finishDate = null;
  		this.lista.done = false;
  	}

  	this.deseosService.guardarStorage();

  	// console.log(this.lista);
  }

  borrar(index: number) {
  	this.lista.items.splice(index, 1);
  	this.deseosService.guardarStorage()
  }
}
