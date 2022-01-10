import React, { useEffect, useState } from 'react'

export const Menssage = () => {
    
    const [coords, setCoords] = useState({x:0, y:0})
    const {x, y} = coords; 


    useEffect(() => {

        const mouseMove = (e) => {
            const coor = {x: e.x, y: e.y}
            setCoords(coor)  
        }
        
        window.addEventListener('mousemove', mouseMove);


        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    
    return (
        <div>
            <h3>Hola pxndx!</h3>

            <p>
                x: {x}
                y: {y}
            </p>

        </div>
    )
}
