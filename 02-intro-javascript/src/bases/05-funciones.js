//Funciones JS

//Formas de las funciones 

const saludar = function(nombre){
    return `Hola ${nombre}`;
}
 
const saludar2 = (nombre) =>{
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;


//Para omitir la palabra return, podemos utilizar ()
const getUser = () =>
    ({
        uid: 'ABC123',
        userName: 'ElPapi'
    })


const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Milton');

console.log( usuarioActivo );

