// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    rango: "Soldado"
};

//Asignacion Desestructurante
//const { nombre, edad, clave } = persona; 

//console.log(edad);

const retornaPersona = ({clave, edad, rango = 'capitan'}) =>{
    
    //console.log(clave, rango)
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.3213,
            lng: 123.12,
        },
    }


}

const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona( persona );


console.log(nombreClave, anios)
console.log(lat, lng)