import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { map } from 'rxjs/operators';

import { Mensaje } from '../interface/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    ) {
      this.afAuth.authState.subscribe( user => {
        console.log('Estado del usuario: ', user);
        if ( !user ) {
          return;
        }
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      });
     }

  cargarMensajes(): any {

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref
                                                              .orderBy('fecha', 'desc')
                                                              .limit(5));

    return this.itemsCollection.valueChanges().pipe(
                                map((mensajes: Mensaje[]) => {
                                  console.log(mensajes);
                                  this.chats = [];
                                  for (const mensaje of mensajes) {
                                    this.chats.unshift(mensaje);
                                  }
                                  return this.chats;
                                }));
  }

  agregarMensaje(texto: string): any {
    const mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };

    return this.itemsCollection.add(mensaje);
  }

  login(provedor: string): void {
    if (provedor === 'Google') {
      this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } else {
      this.afAuth.signInWithPopup(new auth.GithubAuthProvider());
    }
  }
  logout(): void {
    this.usuario = {};
    this.afAuth.signOut();
  }

}
