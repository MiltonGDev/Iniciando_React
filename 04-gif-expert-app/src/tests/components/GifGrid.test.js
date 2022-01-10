import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');



describe('Pruebas GifGrid', () => {
    
    const category = 'One punch';
    
    test('Haciendo match GifGrid', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [{
            id: 'ABC',
            url: 'url/xd',
            tittle: 'a tittle'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>)

        

    })
    
    

})



