import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  validador(control: FormControl): {[s:string]: boolean} {

  	if (control.value?.toLowerCase() === 'nombre') {
	  	return {
	  		validador: true
	  	}
  	}

  	return null;

  }

}
