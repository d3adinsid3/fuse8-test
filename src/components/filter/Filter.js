import React from 'react';
import  './filter.css'

const Filter = () =>{
    return(
        <>
            <form id="filter-form">
                 filter  <input type="text" name="search" className="search"/>
            </form>
        </>
    )
}

export default Filter
