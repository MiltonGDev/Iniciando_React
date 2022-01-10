
const inicialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const toDoReducer = ( state = inicialState, action ) => {
    
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    
    return state;
}

let toDos = toDoReducer();

const newToDo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarToDoAction = {
    type: 'agregar',
    payload: newToDo
}


toDos = toDoReducer( toDos, agregarToDoAction);




console.log(toDos); 