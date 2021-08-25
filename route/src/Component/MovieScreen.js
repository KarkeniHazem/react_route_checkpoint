import React from 'react'
import { useParams } from 'react-router-dom'


export const MovieScreen = ({movies}) => {
    const params= useParams()
   console.log(movies)
   console.log(params)

    const movie= movies.find((el) => el.ID == params.ID);
    console.log(movie)
    return (
        <div>
         <h3>{movie.name}</h3>
         <p>{movie.description}</p>
        </div>
    )
}
