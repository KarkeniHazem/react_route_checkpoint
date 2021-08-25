import React from 'react'
import { MovieCard } from './MovieCard'
export const MovieList = ({movies}) => {
    return (
        <div className='movielist'>
            {movies.map((el)=>( <MovieCard movie={el}/> ))}
        </div>
    );
}
