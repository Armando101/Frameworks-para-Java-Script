import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

	public alerta:string = 'alert-danger';

	public propiedades = {
		danger:true
	}

	public loading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
  	this.loading = true;
  	setTimeout(()=> {
  		this.loading = false;
  	}, 3000);
  }

}
