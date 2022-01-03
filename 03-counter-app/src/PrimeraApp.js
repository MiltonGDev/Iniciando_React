import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


//asi es como creamos props, como argumentos recibidos en PrimeraApp, que es nuestro componente
const PrimeraApp = ( 
    {
        saludo,
        subtitulo
    } 
     ) => {

    
    
    // console.log(saludo)


    return (
        <>

            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        
        </>

        ); 

} 

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo por defecto 2'
}

export default PrimeraApp;