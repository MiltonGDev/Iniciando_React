export const toDoReducer = (state = [], action) => {

    switch ( action.type ) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            //filter regresa un nuevo arreglo
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle':
            return state.map( todo => 
                (todo.id === action.payload) 
                ? {...todo, done: !todo.done}
                : todo
            )


        case 'toggle-old':
            return state.map( todo => {

                //primera manera
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }

                //segunda manera

            } )

        default:
            return state;
    }


}