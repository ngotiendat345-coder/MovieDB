import React, { useEffect, useState } from 'react'

const REACT_APP_MOVIE_API_KEY = `1be649c5`
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${REACT_APP_MOVIE_API_KEY}`
// const response = await fetch(`${API_ENDPOINT}&s=${query}`);
// const response = await fetch(`${API_ENDPOINT}&i=${id}`);

function useFetch(query){
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])
    const [error,setError] = useState(null)

    async function fetchData(){
        setLoading(true)
        try{
            const response = await fetch(`${API_ENDPOINT}${query}`)
            const data = await response.json();
            console.log(data);
            if(data.Response ==='True'){
                setData(data.Search || data)
                setLoading(false)
            }
            else{
                setError(data.Error)
                setLoading(false)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[query])

    return {loading,data,error}
}

export default useFetch;