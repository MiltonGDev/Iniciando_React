//import { heroes } from './data/heroes';

import { heroes, empresa } from "../data/heroes";

//console.log(empresa)

export const HeroesById = (id) => {
    return heroes.find( element => element.id === id );
}

// console.log( HeroesById(3) );


export const heroeByOwner = ( owner ) => heroes.filter(element => element.owner === owner)

// console.log( heroeByOwner('Marvel') );