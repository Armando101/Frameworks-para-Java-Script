import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IngresoEgresoService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  crearIngresoEgreso(ingresoEgreso: IngresoEgreso) {
    return this.firestore
      .doc(`${this.authService.user.uid}/ingreso-egreso`)
      .collection('items')
      .add({ ...ingresoEgreso });
  }

  initIngresosEgresosListener(uid: string) {
    return this.firestore
      .collection(`${uid}/ingreso-egreso/items`)
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((doc) => {
            const data: Object = doc.payload.doc.data();
            return {
              uid: doc.payload.doc.id,
              ...data,
            };
          });
        })
      );
  }

  borrarIngresoEgreso(uidItem: string) {
    const uid = this.authService.user.uid;
    return this.firestore
      .doc(`${uid}/ingreso-egreso/items/${uidItem}`)
      .delete();
  }
}
