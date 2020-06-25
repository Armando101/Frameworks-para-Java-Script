import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private usuario: UsuarioModel;
	public recordarUsuario = false;

  constructor(
  	private auth: AuthService,
  	private router: Router
  ) { }

  ngOnInit() {
  	this.usuario = new UsuarioModel();
  	if (localStorage.getItem('email')) {
		this.usuario.email = localStorage.getItem('email');
		this.recordarUsuario = true;
	}
  }

  login(form: NgForm) {
  	if (form.invalid) {
		return;
	}  	
  	// console.log('Formulario válido');
  	
  	swal({
  		text: 'Espere porfavor...',
  		icon: 'info'
  	});

  	/*swal.showLoading();*/

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
  			swal.close();

  			if (this.recordarUsuario) {
  				localStorage.setItem('email', this.usuario.email);
  			}

  			this.router.navigateByUrl('/home');
  		}, (err) => {
  			console.log(err.error.error.message);
  			swal({
		  		text: 'err.error.error.message',
		  		title: 'Error al autenticar',
		  		icon: 'error'
		  	});
  		});
  }

}
