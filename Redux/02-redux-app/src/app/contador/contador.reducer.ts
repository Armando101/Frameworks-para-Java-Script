import { Action } from "@ngrx/store";
import { decrement, increment } from "./contador.actions";

export function contadorReducer(state: number = 10, action: Action) {

  switch (action.type) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    default:
      return state;
  }

}