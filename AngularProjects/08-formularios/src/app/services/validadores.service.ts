import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
	[s:string]: boolean	// Recibe cualquier cantidad de llaves cuyo valor es boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  validador(control: FormControl): ErrorValidate {

  	if (control.value?.toLowerCase() === 'nombre') {
	  	return {
	  		validador: true
	  	}
  	}

  	return null;

  }

  passwordIguales(pass1Name: string, pass2Name: string) {
  	return (formGroup: FormGroup) => {

  		const pass1Control = formGroup.controls[pass1Name];
  		const pass2Control = formGroup.controls[pass2Name];

  		if (pass1Control.value === pass2Control.value) {
  			pass2Control.setErrors(null);
  		} else {
  			pass2Control.setErrors({noEsIgual: true})
  		}

  	}
  }

  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> {
  	return new Promise( (resolve, reject ) => {
  		setTimeout(()=> {
  			if (control.value === 'Armando101') {
  				resolve({ existe: true });
  			} else {
  				resolve(null);
  			}
  		}, 1500);
  	});
  }

}
