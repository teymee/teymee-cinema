import React from "react";
import "../movie.css";

function Trailer(props) {
  
  return (
    <div className="trailer" allowfullscreen="allowfullScreen">
      <iframe
       
        src={`https://www.youtube.com/embed/${props.youtube}`}
        title={props.title}
        frameBorder="0"
        autoPlay={false}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullScreen"
        
      ></iframe>



    </div>
  );
}

export default Trailer;
