import React from "react";
import "./404.css";

function PageError() {
  return (
    <div className="errorbody">
      <section class="wrapper">
        <div class="container">
          <div class="scene" data-hover-only="false">
            <div class="circle" data-depth="1.2"></div>

            <div class="one" data-depth="0.9">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <div class="two" data-depth="0.60">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <div class="three" data-depth="0.40">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <p class="p404" data-depth="0.50">
              Opps
            </p>
            <p class="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div class="text">
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
