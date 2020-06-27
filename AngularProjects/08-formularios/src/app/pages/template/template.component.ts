import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

	public usuario = {
		nombre: 'Armando',
		apellido: 'Riverea',
		correo: 'armando@rivera.com'

		/*	
		nombre: '',
		apellido: '',
		correo: ''
		*/
	}

  constructor() { }

  ngOnInit(): void {
  }

  guardar(form:NgForm) {
  	// console.log("Submit disparado");
  	// console.log(form);

  	// El siguiente if me permite mostrar menesaje de error
  	// dependiendo el campo que haga falta en el formulario
  	if (form.invalid) {
  		Object.values(form.controls).map(control => {
  			if (control.status === "INVALID") {
	  			// console.log(control);
	  			control.markAsTouched();
  			}
  		});
  		return;
  	}

  	console.log(form.value);
  }

}
