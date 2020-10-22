import { createAction } from '@ngrx/store';

// Entre los corchetes va la accion del contador
export const increment = createAction('[Contador] Increment');
export const decrement = createAction('[Contador] Decrement');
