import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [],
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresoEgreso: IngresoEgreso[] = [];
  ingresoSubs: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.ingresoSubs = this.store
      .select('ingresosEgresos')
      .subscribe(({ items }) => {
        this.ingresoEgreso = items;
      });
  }

  borrar(uuid: string) {
    console.log(uuid);
  }

  ngOnDestroy() {
    this.ingresoSubs.unsubscribe();
  }
}
