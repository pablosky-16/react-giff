/// configuracion de imagen y titulo que aparece en index.ju

import React from 'react'

export const GridTern = ({ title, url}) => {
    return (
        <div className="card">
           <img src={ url } alt={ title } />
           <p> { title } </p>
        </div>
    )
}
