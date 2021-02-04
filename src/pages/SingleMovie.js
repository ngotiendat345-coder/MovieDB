import React from 'react'
import useFetch from '../useFetch'
import {Link, useParams} from 'react-router-dom'

function SingleMovie(){
    const {id} = useParams()
    const {loading,error,data} = useFetch(`&i=${id}`)
    console.log(data)
    if(loading){
        return(
            <div className="loading">

            </div>
        )
    }
    return(
        <section className="single-movie">
            <img src={data.Poster} alt={data.Title}/>
            <div className="single-movie-info">
                <h2>{data.Title}</h2>
                <p>{data.Plot}</p>
                <h4>{data.Year}</h4>
                <Link to="/" className="btn">back to movies</Link>
               
                </div>
        </section>
    )
}

export default SingleMovie;