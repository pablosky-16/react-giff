import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories }) => {

    const [inputValue, setinputValue] = useState('')
    const handleText = (e) =>{
        setinputValue(e.target.value);

    }

    const handleSubmit = (e) =>{
        e.preventDefault();    
        //console.log('hecho')
        if (inputValue.trim().length >= 2 ){
        setCategories ( cats => [ inputValue , ...cats ]);
        setinputValue('');
        }
    
    }
    return (
        <form onSubmit={ handleSubmit}>  
            <input 
                    type="text" value={inputValue} onChange={handleText}/>
        </form>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
    
}