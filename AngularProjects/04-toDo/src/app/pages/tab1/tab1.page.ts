import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	public listas: Lista[];

  constructor(
  	private deseosService: DeseosService,
  	private router: Router
  ) {
  	this.listas = this.deseosService.getListas();
  }

  agregarLista() {
  	this.router.navigateByUrl('/tabs/tab1/agregar');
  }

}
