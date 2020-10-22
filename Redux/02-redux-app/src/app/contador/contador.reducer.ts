import { Action } from '@ngrx/store';
import { increment, decrement } from './contador.actions';

export function contadorReducer(state: number = 10, action: Action): number {
    switch (action.type) {
        case increment.type:
            return state + 1;

        case decrement.type:
            return state - 1;

        default:
            return state;
    }
}
