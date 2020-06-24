import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private usuario: UsuarioModel;

  constructor(
  	private auth: AuthService
  ) { }

  ngOnInit() {
  	this.usuario = new UsuarioModel();
  }

  login(form: NgForm) {
  	if (form.invalid) {
		return;
	}  	
  	// console.log('Formulario válido');
  	
  	this.auth.login(this.usuario)
  		.subscribe(response => {
  			/*
  				Ejemplo de respuesta

  				{
				  "localId": "ZY1rJK0eYLg...",
				  "email": "[user@example.com]",
				  "displayName": "",
				  "idToken": "[ID_TOKEN]",
				  "registered": true,
				  "refreshToken": "[REFRESH_TOKEN]",
				  "expiresIn": "3600"
				}
				
				Docs: https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
  			*/
  			console.log(response);
  		}, (err) => {
  			console.log(err.error.error.message);
  		});
  }

}
