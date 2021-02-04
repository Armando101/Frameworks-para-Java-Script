import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  crearUsuario(name: string, email: string, password: string) {
    console.log({ name, email, password });
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
}
