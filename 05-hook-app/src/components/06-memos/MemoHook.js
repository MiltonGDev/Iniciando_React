import React, { useMemo, useState } from 'react';
import '../02-useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';


export const MemoHook = () => {

    const {counter, incriment}= useCounter( 1000 );
    const [show, setShow] = useState(true)
    

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);



    return (
        <div>
            <h1>Memo Hook</h1>

            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{ memoProcesoPesado }</p>

            <button
            className='btn btn-primary'
            onClick={incriment}
            >

                +1

            </button>

            <button
            className='btn btn-outline-primary ms-3'
            onClick={
                 () =>{
                     setShow(!show)
                 }
            }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
