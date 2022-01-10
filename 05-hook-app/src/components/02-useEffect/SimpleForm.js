import React, { useEffect, useState } from 'react'
import './effects.css';
import { Menssage } from './Menssage';


export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
        // console.log('Hey!');
    }, [] );

    useEffect( () => {
        // console.log('formState Cambio!');
    }, [formState] );

    useEffect( () => {
        // console.log('EmailCambio!');
    }, [email] );

    const handleInputchange = ({target}) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }


    
    
    return (
        <>

            <h1>UseEffect</h1>
            <hr />

            <div className='form-group mb-4'>
               
                <input 
                type='text'
                name='name'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputchange}
                />

            </div>

            <div className='form-group'>
               
                <input 
                type='text'
                name='email'
                className='form-control'
                placeholder='email@gmail.com'
                autoComplete='off'
                value={email}
                onChange={handleInputchange}
                />

            </div>

            {(name === '123') && <Menssage />}

        </>
    );
}
