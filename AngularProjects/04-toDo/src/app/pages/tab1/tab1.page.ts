import { Component } from '@angular/core';

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
  	private deseosService: DeseosService
  ) {
  	this.listas = this.deseosService.getListas();
  }


}
