import React, { useContext, useRef } from 'react'
import {AppContext} from '../context'

function Search(){
    const {error,changeQuery} = useContext(AppContext)
    const inputValue= useRef(null)

    return(
       <form className="search-form" onKeyUp={(e)=>{
           e.preventDefault()
           const value=inputValue.current.value
            changeQuery(value)
       }}>
           <h2>search movies</h2>
           <input type="text" className="form-input" defaultValue="batman" ref={inputValue} />
           <div className="error">{error}</div>
           </form>
           

    )
}

export default Search;