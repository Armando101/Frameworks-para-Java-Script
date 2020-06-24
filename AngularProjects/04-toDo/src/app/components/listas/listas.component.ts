import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

	@ViewChild( IonList ) lista: IonList;
	@Input() terminada = true;

	public listas: Lista[];
  constructor(
  	public deseosService: DeseosService,
 	private router: Router,
 	private alertCtrl: AlertController
  ) { }

  ngOnInit() {
	this.listas = this.deseosService.getListas();
  }

   listaSeleccionada(lista: Lista) {
   	if (this.terminada) {
  		this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
   	} else {
  		this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
   	}
  }

  borrarLista(lista: Lista) {
  	this.deseosService.borrarLista(lista);
  }

  async editar(lista: Lista) {
  	const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Editar lista',
      inputs: [
      	{
      		name: 'titulo',
      		type: 'text',
      		value: lista.title,
      		placeholder: 'Nombre de la lista'
      	}
      ],
      buttons: [
      	{
      		text: 'Cancelar',
      		role: 'cancel',
      		handler: () => {
      			console.log('Cancelar');
      			this.lista.closeSlidingItems();
      		}
      	},
      	{
      		text: 'Editar',
      		handler: (data) => {
      			if (data.titulo.length === 0) {
      				return;
      			}
      			lista.title = data.titulo;
      			this.deseosService.guardarStorage();

      			this.lista.closeSlidingItems();
      		}
      	}
      ]
    });
  	await alert.present();
  }
}