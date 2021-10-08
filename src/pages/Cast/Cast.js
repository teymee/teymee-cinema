import React from "react";
import API from "../../Api";
import "./Cast.css";

function Cast(props) {
  const name = props.name.split(" ");

  return (
    <>
      <div className="cast" style={props.style} id={props.id}>
        <div className="cast-details" style={props.detail}>
          <div className="cast-name">
            <h3>{name[0]}</h3>
            <h3>{name[1]}</h3>
            <h4>{props.character}</h4>
          </div>
        </div>
      </div>

      {/* MOBILE CAST */}

  
      <div className="mobile-cast-name">
            <h3>{name[0]} {name[1]}</h3>
            <p>{API.SLIM_TITLE(props.character,20,15)}</p>
          </div>
    </>
  );
}

export default Cast;
