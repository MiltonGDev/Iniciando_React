import { getGifs } from '../../helpers/getGif'

describe('Pruebas con getGifs fetch', () => {
    
    test('debe de traer 12 elementos', async () => {
        
        const gifs = await getGifs('Naruto');

        expect( gifs.length ).toBe( 12 );
    });

    test('Que pasa cuando no mandamos el parametro', async () => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );


    })
    
    


})
