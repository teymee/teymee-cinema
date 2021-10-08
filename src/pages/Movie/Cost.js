import React from "react";
import API from "../../Api";
import "./movie.css";

function Cost(props) {
  const costStyle = {
    background: `linear-gradient(90deg, ${props.theme}90, rgba(0, 0, 0, 0.05))`,
  };

  
  const budgetCost = props.budget || "";
  const rev = props.revenue || " ";

  let revenue = API.Cost(rev)
  let budget = API.Cost(budgetCost)

 

  return (
    <>
      <div className="cost" style={costStyle}>
        <div className="content1">
          <h3> Budget: {budget} </h3>
          <h3> Revenue: {revenue} </h3>
        </div>
      </div>

   
    </>
  );
}

export default Cost;
