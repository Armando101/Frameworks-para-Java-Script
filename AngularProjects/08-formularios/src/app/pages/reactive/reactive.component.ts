import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

	public form: FormGroup;

  constructor(
  	private fb: FormBuilder
  ) { 
  	this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
  	this.form = this.fb.group({
  		// Definimos propiedades
  		// [Valor por defecto, validaciones sincoronos, validaciones asincronas]
  		nombre: ['Armando'],
  		apellido: ['Rivera'],
  		correo: ['armando@rivera.com'],
  	});
  }

  guardar() {
  	// console.log(this.form);
  	console.log(this.form.value);
  }

}
