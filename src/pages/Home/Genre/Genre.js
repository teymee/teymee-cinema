import React from 'react'
import './Genre.css'

function Genre(props) {
    return (
        <>
           <p className = "genre">{props.genre}</p> 
        </>
    )
}

export default Genre
