import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement } from './contador.actions';

// export function contadorReducer(state: number = 10, action: Action): number {
//     switch (action.type) {
//         case increment.type:
//             return state + 1;

//         case decrement.type:
//             return state - 1;

//         default:
//             return state;
//     }
// }


// La siguiente manera funciona igual que la anterior solo que esta es la recomendada

export const initialState = 0;

// tslint:disable-next-line: variable-name
const _countadorReducer = createReducer(initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1)
);

export function contadorReducer(state: any, action: Action): number {
    return _countadorReducer(state, action);
}
