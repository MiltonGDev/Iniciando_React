import React from 'react'

export const GifGridItem = ({img, tittle, url}) => {
    return (
        <div className='card animate__animated animate__fadeIn'>

            <img src={url} alt={tittle}></img>
            <p>{tittle}</p>

        </div>
    )
}
