import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    } )
    
    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    });

    test('Evaluar cambios en caja de texto', () => {

        const input = wrapper.find('input');

        const value = 'hola mundo';

        input.simulate('change', { target: {value} });

        expect(wrapper.find('p').text().trim()).toBe(value);


    });


    test('No se debe de postear la informacion onSubmit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault: () =>{}});

        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');

        let value = 'hola mundo';

        input.simulate('change', { target: {value} });

        value = 'Hola';

        wrapper.find('form').simulate('submit', {preventDefault: () =>{}});

        input.simulate('change', { target: {value} });

        expect( setCategories ).toHaveBeenCalled();
        

    })
    
    

})
