import React, {useState} from 'react';
import  './filter.css'

const Filter = props =>{

    const [searchInput, setSearchInput] = useState('')

    const onLabelChange = (e) => {
        const searchInput =  e.target.value
        setSearchInput(searchInput)
        props.onLabelChange(searchInput)
    }

    return(
        <>
            <form id="filter-form">
                <div className='bol' > filter</div> <input type="text" name="search" className="search"
                 onChange={onLabelChange} value={searchInput}/>
            </form>
        </>
    )
}

export default Filter
