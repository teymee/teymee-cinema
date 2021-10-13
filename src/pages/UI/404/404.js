import React from "react";
import "./404.css";

function PageError() {
  return (
    <div className="errorbody">
      <section className="wrapper">
        <div className="container">
          <div className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.50">
              Opps
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div className="text">
            <article>
              <p>
                Seems you've gotten lost in the Woods, <br />
                Let's get you back home
              </p>
              <button><a href="/">Home</a></button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageError;
