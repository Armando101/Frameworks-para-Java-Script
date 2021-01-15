import { ActionReducerMap } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { filtrosValidos } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";
import { Todo } from "./todo/models/todo.model";
import { todoReducer } from "./todo/todo.reducer";

export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};