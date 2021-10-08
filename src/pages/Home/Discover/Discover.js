import React from 'react'
import './Discover.css'


function Discover(props) {
  
    return (
        <div onClick={props.onClick} className="discover" style = {props.style} id = {props.id}  >
           
            <div className='movie-details' style = {props.detail}>
            </div>
        </div>
    )
}

export default Discover
