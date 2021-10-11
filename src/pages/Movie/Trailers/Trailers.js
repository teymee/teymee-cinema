import React from "react";
import "../movie.css";
import Trailer from "./Trailer";

function Trailers(props) {
  let trailer;
   const video = props.video || ""
  if (video.length > 2) {
    const trailer1 = props.video.filter((element, index) => {
      return element.type === "Trailer";
    });
    trailer = trailer1.filter((element, index) => {
      return index <= 1;
    });
  } else {
    trailer = [...video];
  }

  const content = trailer.map((element) => {
    return (
     <>
        <Trailer youtube={element.key} title={element.title} key={element.key}/>
        <iframe
       
       src={`https://www.youtube.com/embed/xDMP3i36naA`}
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
        </>
     
    );
  });

  return <div className="trailers">{content}</div>;
}

export default Trailers;
