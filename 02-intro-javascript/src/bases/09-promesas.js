import { HeroesById } from "./bases/08-imp-expo";
import { heroes } from "./data/heroes";

//promesas

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout( () => {

//         // Tarea
//         const heroe = HeroesById(2);

//         resolve( heroe );

//     }, 2000)

// } );

// promesa.then( (heroe) =>{
//     console.log('Heroe', heroe);
// } )
// .catch(err => console.warn( err ))


const heroeByIdAsync = (id) =>{
    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
    
            // Tarea
            const heroe = HeroesById(id);
            
            if (heroe) {
                resolve( heroe );
                
            } else{
                reject('No se pudo encontrar el heroe');
                
            }

        }, 2000)
    
    } );
}

heroeByIdAsync(5)
.then(console.log)
.catch(console.warn);