import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

	public form: FormGroup;

  constructor(
  	private fb: FormBuilder,
  	private validadores: ValidadoresService
  ) { 
  	this.crearFormulario();
  	this.cargarData();
  }

  ngOnInit(): void {
  }

  get pasatiempos() {
  	return this.form.get('pasatiempos') as FormArray;
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

  get usuarioNoValido() {
  	return this.form.get('usuario').invalid;
  }

  get distritoNoValido() {
  	return this.form.get('direccion.distrito').invalid && this.form.get('direccion.distrito').touched
  }

  get ciudadNoValido() {
  	return this.form.get('direccion.ciudad').invalid && this.form.get('direccion.ciudad').touched
  }

	get pass1NoValido() {
  	return this.form.get('pass1').invalid && this.form.get('pass1').touched
  } 

  get pass2NoValido() {
  	const pass1 = this.form.get('pass1').value;
  	const pass2 = this.form.get('pass2').value;

  	return pass1 !== pass2 && this.form.get('pass2').touched;
  } 

  crearFormulario() {
  	this.form = this.fb.group({
  		// Definimos propiedades
  		// [Valor por defecto, validaciones sincoronos, validaciones asincronas]
  		nombre: ['', [Validators.required, Validators.minLength(5)]],
  		apellido: ['', [Validators.required, this.validadores.validador]],
  		pass1: ['', Validators.required],
  		pass2: ['', Validators.required],
  		correo: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
  		usuario: ['', , this.validadores.existeUsuario],
  		direccion: this.fb.group({
  			distrito: ['', Validators.required],
  			ciudad: ['', Validators.required]
  		}),
  		pasatiempos: this.fb.array([])
  	}, {
  		validators: this.validadores.passwordIguales('pass1', 'pass2')
  	});
  }

  agregarPasatiempo() {
  	this.pasatiempos.push( this.fb.control('', Validators.required));
  }

  borrarPasatiempo(index:number) {
  	this.pasatiempos.removeAt(index);
  }

  guardar() {
  	if (this.form.invalid) {
  		Object.values(this.form.controls).map(control => {
  			if (control.status === "INVALID") {
	  			// console.log(control);
	  			control.markAsTouched();
  			}
  			if (control instanceof FormGroup) {
  				Object.values(control.controls).map( control => control.markAsTouched());
  			}
  		});
  		return;
  	}

  	// console.log(this.form);
  	console.log(this.form.value);

  	// Posteo de informacion


	  // Reset de campos
	  this.form.reset({
	  	nombre: 'Sin nombre'
	  });
  }

  cargarData() {
  	// this.form.setValue({ // setValue me pide todos los campos, de lo contrario marca error
  	this.form.reset({	// Con reset podemos omitir campos
		  nombre: "Armando",
		  apellido: "Rivera",
		  correo: "armando@rivera.com",
		  pass1: '123',
		  pass2: '123',
		  direccion: {
		    distrito: "Naucalpan",
		    ciudad: "Mexico"
		  }
		});
  	
  	['Comer', 'Dormir'].map(value => this.pasatiempos.push(this.fb.control(value)));

  }

}
