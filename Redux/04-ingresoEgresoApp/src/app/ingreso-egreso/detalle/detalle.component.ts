import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';
import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [],
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresoEgreso: IngresoEgreso[] = [];
  ingresoSubs: Subscription;

  constructor(
    private store: Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) {}

  ngOnInit(): void {
    this.ingresoSubs = this.store
      .select('ingresosEgresos')
      .subscribe(({ items }) => {
        this.ingresoEgreso = items;
      });
  }

  borrar(uuid: string) {
    this.ingresoEgresoService
      .borrarIngresoEgreso(uuid)
      .then(() => Swal.fire('Borrado', 'Item borrado', 'success'))
      .catch((err) => Swal.fire('Error', err.message, 'error'));
  }

  ngOnDestroy() {
    this.ingresoSubs.unsubscribe();
  }
}
