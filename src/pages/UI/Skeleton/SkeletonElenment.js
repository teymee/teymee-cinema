import React from "react";
import "./skeleton.css";

function SkeletonElenment({ type }) {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
}

export default SkeletonElenment;
