import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.test.js', () => {
  
    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()


        expect( user ).toEqual( userTest );

    })


    //getUsuarioActivo debe retornar un objeto

    test('getUsuarioActivo debe retornar el mismo objeto esperado', () => {
        
        const usuario = 'ThunixxSV';

        const getUsuarioActivoTest = getUsuarioActivo(usuario);

        const usuarioActivo = {
            uid: 'ABC567',
            username: usuario
        }

        expect( usuarioActivo ).toEqual( getUsuarioActivoTest );

    })
})
