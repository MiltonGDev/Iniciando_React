import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';

import './styles.css';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';


const init = () => {
    
    return JSON.parse(localStorage.getItem('toDos')) || [];
};


export const ToDoApp = () => {
    
    const [toDos, dispatch] = useReducer(toDoReducer, [], init);

    

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos])

    const handleDelete = (toDoId) => {

        const action = {
            type: 'delete',
            payload: toDoId
        };

        dispatch(action);

    };

    const handleToggle = (toDoId) => {

        dispatch({
            type: 'toggle',
            payload: toDoId
        })

    }

    const handleAddToDo = ( newToDo ) => {
        dispatch({
            type: 'add',
            payload: newToDo
        });
    }




    return (
        <div>
            <h1>ToDo App, ({ toDos.length})</h1>
            <hr />

            <div className='row'>

                <div className='col-7'>

                    <ToDoList toDos={toDos} handleDelete={handleDelete} handleToggle={handleToggle}/>

                    
                </div>

                <div className='col'>
                    
                    <ToDoAdd 
                        handleAddToDo = {handleAddToDo}
                    />

                </div>

            </div>


        </div>
    )
}
