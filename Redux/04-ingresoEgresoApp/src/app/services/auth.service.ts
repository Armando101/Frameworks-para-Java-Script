import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Store } from '@ngrx/store';

import { AppState } from '../app.reducer';
import { Usuario } from '../models/usuario.model';
import * as authActions from '../auth/auth.actions';
import { Subscription } from 'rxjs';
import { unSetItems } from '../ingreso-egreso/ingreso-egreso.actions';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubscription: Subscription;
  private _user: Usuario;

  get user() {
    return this._user;
  }

  constructor(
    public auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private store: Store<AppState>
  ) {}

  initAuthListener() {
    this.auth.authState.subscribe((fuser) => {
      if (!fuser) {
        this.userSubscription.unsubscribe();
        this.store.dispatch(authActions.unSetUser());
        this._user = null;
        this.store.dispatch(unSetItems());
        return;
      }

      this.userSubscription = this.firestore
        .doc(`${fuser.uid}/usuario`)
        .valueChanges()
        .subscribe((firebaseUser: Usuario) => {
          const user = Usuario.fromFirebase(firebaseUser);
          this._user = user;
          this.store.dispatch(authActions.setUser({ user }));
        });
    });
  }

  crearUsuario(name: string, email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const newUser = new Usuario(user.uid, name, email);
        return this.firestore.doc(`${user.uid}/usuario`).set({ ...newUser });
      });
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isAuth() {
    return this.auth.authState.pipe(map((fbUser) => fbUser != null));
  }
}
