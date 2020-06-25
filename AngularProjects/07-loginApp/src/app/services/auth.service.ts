import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuario.model';
import { Keys } from './keys';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
	private API_KEY = Keys.getApiKey();
	private userToken: string;

	// Crear nuevos usuarios
	// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

	// Login
	// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(
  	private http: HttpClient
  ) {
  	this.leerToken();
  }

  logout() {
  	localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
  	const authData = {
  		...usuario,
  		returnSecureToken: true
  	};

  	return this.http.post(
  		`${this.url}:signInWithPassword?key=${this.API_KEY}`,
  		authData
  	).pipe(
  		map( response => {
  			console.log('Map de rxjs')
  			this.guardarToken(response['idToken']);
  			return response;
  		})
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
  	).pipe(
  		map( response => {
  			console.log('Map de rxjs')
  			this.guardarToken(response['idToken']);
  			return response;
  		})
  	);
  }

  private guardarToken(idToken: string) {
  	this.userToken = idToken;
  	localStorage.setItem('token', idToken);

  	let today = new Date();
  	today.setSeconds(3600);

  	localStorage.setItem('expira', today.getTime().toString());
  }

  leerToken() {
  	if (localStorage.getItem('token')) {
  		this.userToken = localStorage.getItem('token');
  	} else {
  		this.userToken = '';
  	}

  	return this.userToken;
  }

  estarAutenticado(): boolean {
  	if (this.userToken.length < 2) {
  		return false;
  	}

  	const expira = Number(localStorage.getItem('expira'));
  	const expiraDate = new Date();
  	expiraDate.setTime(expira);

  	if (expiraDate > new Date()) {
  		return true;
  	} else {
  		return false;
  	}
  }

}
