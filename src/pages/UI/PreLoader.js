import React from "react";
import classes from "./preloader.module.css"

function PreLoader() {
  return (
    <div className={classes.body}>
      <div className= {classes["e-loadholder"]}>
        <div className= {classes["m-loader"]}>
          <span className= {classes["e-text"]}></span>
        </div>
      </div>
      <div id={["particleCanvas-Blue"]}></div>
      <div id={["particleCanvas-White"]}></div>
    </div>
  );
}

export default PreLoader;
