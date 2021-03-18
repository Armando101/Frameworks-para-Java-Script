import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';
import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';
import * as ui from 'src/app/shared/ui.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: [],
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  ingresoForm: FormGroup;
  tipo: string = 'ingreso';
  loading: boolean = false;
  subscriptionLoading: Subscription;

  constructor(
    private fb: FormBuilder,
    private ingresoEgresoService: IngresoEgresoService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.ingresoForm = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required],
    });
    this.subscriptionLoading = this.store.select('ui').subscribe((ui) => {
      this.loading = ui.isLoading;
    });
  }

  guardar() {
    this.store.dispatch(ui.isLoading());
    if (this.ingresoForm.invalid) {
      return;
    }
    console.log(this.ingresoForm.value);

    const { descripcion, monto } = this.ingresoForm.value;
    const ingresoEgreso = new IngresoEgreso(descripcion, monto, this.tipo);

    this.ingresoEgresoService
      .crearIngresoEgreso(ingresoEgreso)
      .then(() => {
        this.ingresoForm.reset();
        Swal.fire('Registro creado', descripcion, 'success');
        this.store.dispatch(ui.stopLoading());
      })
      .catch((err) => {
        Swal.fire('Error!!', err.message, 'error');
        this.store.dispatch(ui.stopLoading());
      });
  }

  ngOnDestroy() {
    this.subscriptionLoading.unsubscribe();
  }
}
