import { Action, createReducer, on } from "@ngrx/store";
import { decrement, dividir, increment, multiplicar, reset } from "./contador.actions";

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
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (state) => state * 0),
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}