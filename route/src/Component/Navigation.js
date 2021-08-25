import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <li>
                    <Link to='/'> 
                    <h2>  Home</h2>
                    </Link>
                </li>
                <li>
                    <Link to='/movielist'>
                    <h2>  Movies</h2>
                    </Link>
                </li>
                <li>
                <Link to='/contact'>
                    <h2>  Contact</h2>
                </Link>
                </li>
            </ul>
        </div>
    )
}
