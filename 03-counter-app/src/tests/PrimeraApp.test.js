import React from "react";
import PrimeraApp from "../PrimeraApp";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en PrimeraApp', () => {
    
    // test('debe de mostrar el mensaje "Hola, soy Milton" ', () => {
    //     const saludo = 'Hola, soy Milton';

    //     const { getByText } = render( <PrimeraApp saludo={saludo}/> );

    //     expect( getByText(saludo) ).toBeInTheDocument();    
    // })


    test('Debe de momstrar <PrimeraApp /> Correctamente', () => {

        const saludo = 'Hola, soy Milton';


        const wrapper = shallow( <PrimeraApp saludo = {saludo}/> );

        expect( wrapper ).toMatchSnapshot();


    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Milton';
        const subtitulo = 'este es el nuevo subtitulo';


        const wrapper = shallow( <PrimeraApp saludo = {saludo} subtitulo={subtitulo}/> );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);

        expect( textoParrafo ).toBe( subtitulo );




    })
    
    
    

})
