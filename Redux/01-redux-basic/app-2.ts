import { Action } from './ngrx-fake/ngrx';
import { incrementAction, decrementAction, multiplicarAction, dividirAction, resetAction } from './contador/contador.actions';

function reducer(state: number, action: Action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return ++state;
        case 'DECREMENTAR':
            return --state;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}

console.log(reducer(10, incrementAction)); // 11
console.log(reducer(10, decrementAction)); // 9
console.log(reducer(10, multiplicarAction)); // 20
console.log(reducer(10, dividirAction)); // 5
console.log(reducer(10, resetAction)); // 0