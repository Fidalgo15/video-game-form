import React from 'react'
import {Link} from '@reach/router'

export const Nav = () => {
    return (
        <>
        <nav>
            <Link to="/">Home </Link>
            <br/>
            <Link to="/create-games"> List Games</Link>
        </nav>
        </>
    )
}