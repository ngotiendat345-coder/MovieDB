import React, { createContext, useState } from 'react'
import useFetch from './useFetch'

export const AppContext = createContext()

export const AppProvider =(props)=>{

    const [query,setQuery]=useState('batman')
    const {loading,error,data} = useFetch(`&s=${query}`)

    function changeQuery(newQuery){
        setQuery(newQuery)
    }
    return(
        <AppContext.Provider value={{loading,error,data,changeQuery}}>
            {props.children}
        </AppContext.Provider>
    )
}