import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	private usuario: UsuarioModel;

  constructor(
  	private auth: AuthService
  ) { }

  ngOnInit() {
  	this.usuario = new UsuarioModel();
  	this.usuario.email = 'armando@rivera.com';
  }

  onSubmit( form: NgForm) {

  	if (form.invalid) { return }

  	// console.log('Formulario enviado');
  	// console.log(this.usuario);
  	// console.log(form); // En directives podemos ver los inputs del formulario al igual que en controls
  	
  	this.auth.nuevoUsuario(this.usuario)
  		.subscribe(response => {
  			 console.log(response);
  			 /*	
  			 Ejemplo de respuesta
						{
						  "idToken": "[ID_TOKEN]",
						  "email": "[user@example.com]",
						  "refreshToken": "[REFRESH_TOKEN]",
						  "expiresIn": "3600",
						  "localId": "tRcfmLH7..."
						}

						Docs: https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
  			 */
  		}, (err) => {
  			console.log(err.error.error.message);
  		});
  }

}
