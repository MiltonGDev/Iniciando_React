import React from "react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';


describe('Pruebas en useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', () => {
        
        // const {data, loading} = useFetchGifs( 'One punch' );

        const {result} = renderHook( () => {
            return useFetchGifs( 'One punch' ) });

        const {data, loading} = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })
    
    


})
