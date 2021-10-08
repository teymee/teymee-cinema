import React from "react";

function Item(props) {
  const style = {
    backgroundImage: `url(${props.img})`,
  };

  const themeStyle = {
    backgroundColor: props.theme,
  };



  return (
    <div className="card">
     
      <div className="card-body" style={style}>
      <div className="card-rating" style={themeStyle}> 
      {props.rating}
      </div>
      </div>
      <div className="card-details">
        {props.title}
      </div>
    </div>
  );
}

export default Item;
