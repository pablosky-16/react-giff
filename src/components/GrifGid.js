import React from 'react';
// import React, {useEffect, useState} from 'react'
import { useFetchGifs } from '../hooks/appHooks'
// import { getGifsFetch } from '../helpers/GetGifs';
import { GridTern } from './GridTern';

export const GrifGid =  ({ category}) => {
// const state = useFetchGifs();

const { data,  loading}  = useFetchGifs(category);  // renombrar desestructuracion data a



//  const [images, setImages] = useState([])
    //useEffect (()=>{
      //  getGifsFetch ( category )
      //      .then ( setImages );
    // }, [ category ])



   // getGifsFetch();
    return (

<>          

        <h1> sasasasa</h1>
        <h3>{ category }</h3>

        { loading && <p>Loading</p> }
        
         <div className="card-grid">
            
           
                    {
                        data.map ( img => (
                       
                            <GridTern
                            key = {img.id}
                            {... img } />
                        ))
                    }
            
                </div> 

        </>
    )
}
