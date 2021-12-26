
const persona = {
    nombre: 'Tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 23425,
        lat: 23.1234,
        lng: 12.124,
    }
}

//console.table( persona );

//Realizar copias de objetos con SPRED

//Si realizamos una copia de una manera normal, asi: "const persona2 = persona", esto lo que hace es apuntar a persona2 a la ubicacion en memoria de persona, en realidad esto no es un clon.

const persona2 = { ...persona };
persona2.nombre = 'Zelda';


console.log( persona );
console.log( persona2 );