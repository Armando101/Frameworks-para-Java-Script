import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	private usuario: UsuarioModel;

  constructor(
  	private auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  	this.usuario = new UsuarioModel();
  	// this.usuario.email = 'armando@rivera.com';
  }

  onSubmit( form: NgForm) {

  	if (form.invalid) { return }

  	// console.log('Formulario enviado');
  	// console.log(this.usuario);
  	// console.log(form); // En directives podemos ver los inputs del formulario al igual que en controls
  	 
    swal({
      /*allowOutsideClick: false,*/
      text: 'Espere porfavor...',
      icon: 'info'
    });

    /*swal.showLoading();*/

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
         swal.close();
         this.router.navigateByUrl('/home');

  		}, (err) => {
        swal({
          text: 'err.error.error.message',
          title: 'El usuario ya existe',
          icon: 'error'
        });

  			console.log(err.error.error.message);
  		});
  }

}
