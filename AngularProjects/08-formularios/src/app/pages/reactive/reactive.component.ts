import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  get nombreNoValido() {
  	return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }

  get apellidoNoValido() {
  	return this.form.get('apellido').invalid && this.form.get('apellido').touched
  }

  get correoNoValido() {
  	return this.form.get('correo').invalid && this.form.get('correo').touched
  }

  crearFormulario() {
  	this.form = this.fb.group({
  		// Definimos propiedades
  		// [Valor por defecto, validaciones sincoronos, validaciones asincronas]
  		nombre: ['', [Validators.required, Validators.minLength(5)]],
  		apellido: ['', Validators.required],
  		correo: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
  	});
  }

  guardar() {
  	if (this.form.invalid) {
  		Object.values(this.form.controls).map(control => {
  			if (control.status === "INVALID") {
	  			// console.log(control);
	  			control.markAsTouched();
  			}
  		});
  		return;
  	}

  	// console.log(this.form);
  	console.log(this.form.value);
  }

}
