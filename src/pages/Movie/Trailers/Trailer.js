import React from "react";
import "../movie.css";
// import Iframe from 'react-iframe'

function Trailer(props) {
  
  return (
    <div className="trailer" allowfullscreen="allowfullScreen">
      <iframe
       
        src={`https://www.youtube.com/embed/${props.youtube}`}
        // allowFullScreen="allowfullScreen"
        // mozallowfullscreen="mozallowfullscreen" 
        // msallowfullscreen="msallowfullscreen" 
        // oallowfullscreen="oallowfullscreen" 
        // webkitallowfullscreen="webkitallowfullscreen"
        title={props.title}
        frameBorder="0"
        // autoPlay={false}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        // allowFullScreen
        
      ></iframe>








    </div>
  );
}

export default Trailer;
