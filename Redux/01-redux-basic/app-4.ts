import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/cotador.reducer';
import { incrementAction } from './contador/contador.actions';

const store: Store = createStore(contadorReducer);

store.subscribe(() => {
    console.log('Subs: ', store.getState());
});


store.dispatch(incrementAction);
console.log(store.getState());