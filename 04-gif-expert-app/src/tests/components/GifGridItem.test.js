import React from "react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import  { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas para GifGridItem', () => {
    
    const url = 'https://media2.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=446fbf6ca4d0d24cygq8kkdjokh6d3w8qdz4otn5u21ealob&rid=giphy.gif&ct=g';
    const tittle = 'A tittle'; 
    let wrapper = shallow( <GifGridItem tittle={tittle} url={url}/> );

    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(tittle);


    });

    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(tittle);

    });

    test('debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');

        const classBuscada = div.prop('className');
        
        expect( classBuscada.includes('animate__fadeIn') ).toBe( true );

    })
    
    
    
    


})

