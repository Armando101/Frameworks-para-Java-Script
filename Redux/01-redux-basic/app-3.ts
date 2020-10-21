import { Reducer, Action } from "./ngrx-fake/ngrx";
import { contadorReducer } from "./contador/cotador.reducer";
import { incrementAction } from './contador/contador.actions';

class Store<T> {

    constructor(private reducer: Reducer<T>, private state: T) {}

    // Me regresa el estado actual
    getState() {
        return this.state;
    }

    // Le mando una accion y la realiza
    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }

}

const store = new Store(contadorReducer, 10);

console.log(store.getState()); // 10

store.dispatch(incrementAction);
store.dispatch(incrementAction);

console.log(store.getState()); // 10