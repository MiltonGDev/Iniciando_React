//Desestructuracion de arreglos

const personajes = ["Goku", "Gohan", "Trunks"];


const [ ,,p3 ] = personajes; 

console.log( p3 );

const retornaArreglo = () =>{
    return ["ABC", 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const tarea = (valor) =>{
    return [valor, ()=>{console.log("Hola Mundo")}];
}

const [nombre, fun] = tarea( "Goky" );

console.log(nombre);
fun();