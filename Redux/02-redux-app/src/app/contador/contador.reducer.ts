import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./contador.actions";

export const initialState = 20;

// export function contadorReducer(state: number = 10, action: Action) {

//   switch (action.type) {
//     case increment.type:
//       return state + 1;
//     case decrement.type:
//       return state - 1;
//     default:
//       return state;
//   }

// }

// Otra manera más eficiente de hacer lo que hicimos con el switch

const _contadorReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}