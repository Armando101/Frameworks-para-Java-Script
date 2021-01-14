import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Contador] Increment');
export const decrement = createAction('[Contador] Decrement');

// Si nuestra acción debe recibir propiedades (argumentos) las pasamos por el parámetro props
export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{ numero: number }>()
);

export const dividir = createAction(
  '[Contador] Dividir',
  props<{ numero: number }>()
);

export const reset = createAction('[Contador] Reset');