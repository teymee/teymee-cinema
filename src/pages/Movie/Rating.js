import React from "react";
import "./movie.css";

const Rating = React.memo((props) => {
  // const displays = document.querySelectorAll('.note-display');
  // const transitionDuration = 900;

  // displays.forEach(display => {
  //   let note = parseFloat(display.dataset.note);
  //   let [int, dec] = display.dataset.note.split('.');
  //   [int, dec] = [Number(int), Number(dec)];

  //   strokeTransition(display, note);

  //   increaseNumber(display, int, 'int');
  //   increaseNumber(display, dec, 'dec');
  // });

  // function strokeTransition(display, note) {
  //   let progress = display.querySelector('.circle__progress--fill');
  //   let radius = progress.r.baseVal.value;
  //   let circumference = 2 * Math.PI * radius;
  //   let offset = circumference * (10 - note) / 10;

  //   progress.style.setProperty('--initialStroke', circumference);
  //   progress.style.setProperty('--transitionDuration', `${transitionDuration}ms`);

  //   setTimeout(() => progress.style.strokeDashoffset = offset, 100);
  // }

  // function increaseNumber(display, number, className) {
  //   let element = display.querySelector(`.percent__${className}`),
  //       decPoint = className === 'int' ? '.' : '',
  //       interval = transitionDuration / number,
  //       counter = 0;

  //   let increaseInterval = setInterval(() => {
  //     if (counter === number) { window.clearInterval(increaseInterval); }

  //     element.textContent = counter + decPoint;
  //     counter++;
  //   }, interval);
  // }

  const ratingStyle = {
    stroke: props.theme,
  };

  return (
    <div className="rating">
      <ul className="display-container">
        <li class="note-display" style={ratingStyle} data-note="7.5">
          <div className="circle">
            <svg width="84" height="84" class="circle__svg">
              <circle
                style={ratingStyle}
                cx="41"
                cy="41"
                r="38"
                className="circle__progress circle__progress--path"
              ></circle>
              <circle
                cx="41"
                cy="41"
                r="38"
                className="circle__progress circle__progress--fill"
              ></circle>
            </svg>

            <div className="percent">
              <span className="percent__int" style={{ fontSize: "18px" }}>
                {props.rating}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
});

export default Rating;
