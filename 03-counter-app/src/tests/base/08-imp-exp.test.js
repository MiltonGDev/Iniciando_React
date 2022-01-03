import { heroeByOwner } from "../../../../02-intro-javascript/src/bases/08-imp-expo";
import { getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    
    test('Debe de retornar un heroe por id', () => {
        
        const id = 1;

        const heroe = getHeroeById( id );

        // console.log(heroe);

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );


    });

    test('undifiend si heroe no existe', () => {
        
        const id = 10;

        const heroe = getHeroeById( id );

        // const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toBe( undefined );


    });

    test('debe de retornar todos los heroes de DC', () => {

        const owner = 'DC';

        const heroesOwner = heroeByOwner(owner);

        const heroesDC = heroesOwner.filter( h => h.owner === owner );

        expect( heroesDC ).toEqual( heroesOwner );

    });

    test('debe de retornar un arreglo con los heroes de Marvel con length de 2 y compararlo en el toBe', () => {

        const heroesMarvel = heroeByOwner('Marvel');

        expect( 2 ).toBe(heroesMarvel.length);

    });
    


})
