import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from '../context'

function Movies(){
    const {loading,data} = useContext(AppContext)
    if(loading){
        return(
            <div className="loading">

            </div>
        )
    }
    return (
        <section className="movies">
            {data.map((item,index)=>{
                const {Title,Year,imdbID,Type,Poster} = item
                return (
                    <Link to={`/movie/${imdbID}`} key={index} className="movie">
                        <article>
                            <img src={Poster} alt={Title}/>
                            <div className="movie-info">
                                <h4 className="title">{Title}</h4>
                                <p>{Year}</p>
                                </div>
                        </article>
                    </Link>
                )
            })}
            
        </section>
    )
}

export default Movies;