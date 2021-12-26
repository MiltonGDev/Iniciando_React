//operador ternario

const activo = true;
// let mensaje = '';


//forma tradicional
// if ( activo ) {
//     mensaje = 'activo';
// }else{
//     mensaje = 'inactivo';
// }


//Ternario

// const mesanje = ( activo ) ? 'activo' : 'nactivo';

const mensaje = !activo && 'activo';

console.log(mensaje)