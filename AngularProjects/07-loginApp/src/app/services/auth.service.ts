import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsuarioModel } from '../models/usuario.model';
import { Keys } from './keys';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
	private API_KEY = Keys.getApiKey();

	// Crear nuevos usuarios
	// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

	// Login
	// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(
  	private http: HttpClient
  ) { }

  logout() {

  }

  login(usuario: UsuarioModel) {
  	const authData = {
  		...usuario,
  		returnSecureToken: true
  	};

  	return this.http.post(
  		`${this.url}:signInWithPassword?key=${this.API_KEY}`,
  		authData
  	);
  }

  nuevoUsuario(usuario: UsuarioModel) {
  	const authData = {
  		...usuario,
  		returnSecureToken: true
  	};

  	return this.http.post(
  		`${this.url}:signUp?key=${this.API_KEY}`,
  		authData
  	);
  }

}
