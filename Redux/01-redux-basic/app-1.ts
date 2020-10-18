// Acciones
interface Action {
    type: string;
    payload?: any;
}

const incrementAction: Action = {
    type: 'INCREMENTAR',
};

const decrementAction: Action = {
    type: 'DECREMENTAR',
};

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

function reducer(state = 10, action: Action) {
// if (action.type === 'INCREMENTAR') {
    //     state++;
    // }

    switch (action.type) {
        case 'INCREMENTAR':
            return ++state;
        case 'DECREMENTAR':
            return --state;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        default:
            return state;
    }
}

// Usar el reducer
console.log(reducer(10, incrementAction)); // 11
console.log(reducer(10, decrementAction)); // 9
console.log(reducer(10, multiplicarAction)); // 20
console.log(reducer(10, dividirAction)); // 20