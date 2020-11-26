import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GrifGid } from './components/GrifGid';

  const AgifExpertApp = () => {

   // const categorias = ['El Padrino', 'Scarface', 'AmericaX'];
    const [ categories, setCategories ] = useState(['El Padrino']);  
    
    //const setAdd = ()=>{
      //  setCategories([... categories, 'Hunter'])
   // }

    
    
    return (
        <>
            <h2>Gif expertos</h2>
            <hr />
            <AddCategory setCategories={ setCategories } />
            <ul>
                {
                    categories.map (category  =>{

                    return <GrifGid key = { category } category = { category} />
                    })
                }
            </ul>
        </>
    )
}

export default AgifExpertApp;