import React from "react";
// import CounterApp from "../CounterApp";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


import CounterApp from "../CounterApp";

describe('Test para CounterApp.js', () => {
    
    let wrapper = shallow( <CounterApp /> ); //esto lo declaro tambien aca para que no piedar los shortcuts, si lo hiciera sin declararlo, los shortcuts no me los mostraria.

    beforeEach( () => {
        
        wrapper = shallow( <CounterApp /> );
    } )

    test('Debe de mostrar Counterapp correctamente', () => {


        expect( wrapper ).toMatchSnapshot();

        
    })

    test('debe de mostrar el valor predeterminado de 100 ', () => {

        const wrapper = shallow( <CounterApp value = {100}/> );

        const valorPredeterminado = wrapper.find('h2').text();

        
        expect( valorPredeterminado ).toBe('100');

    });

    test('Debe de incrementar con el boton +1', () => {

        const btn1 = wrapper.find('button').at(0).simulate('click');

        const valor = wrapper.find('h2').text();

        expect( valor ).toBe('11');




    });

    test('Debe de decrementar con el boton -1', () => {

        const btn1 = wrapper.find('button').at(2).simulate('click');

        const valor = wrapper.find('h2').text();

        expect( valor ).toBe('9');

    });

    test('El boton rest debe de colocar el valor por defecto', () => {
        
        const wrapper = shallow( <CounterApp value = {105}/> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');



        const valor = wrapper.find('h2').text();

        expect( valor ).toBe('105');

    })
    


    
    
    


})
