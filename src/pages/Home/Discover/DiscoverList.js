import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Discover from "./Discover";
import "./Discover.css";
import API from "../../../Api";
import Slide from "../../UI/slide";

const DiscoverList = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);

  useEffect(() => {
    async function randomMovies() {
      try {
        const response = await fetch(API.DISCOVER);
        const data = await response.json();
        const newData = API.DATA_CHECK(data.results, "list", "genre");
        setDiscoverMovies(newData);
      } catch (e) {
        console.log(`${e} from DiscoverList`);
      }
    }

    randomMovies();
  }, []);



  let discover, discoverComponent;

  if (discoverMovies.length > 0) {
    discover = discoverMovies.map((movie) => {
      // STYLES
      const color = [
        // '#5b5046',
        // '#b28e63',
        // '#c1868d',
        // // '#5079c4',
        // // '#66bb6a',
        // // '#4c4441',
        // "#007bff",
        // "#6610f2",
        // "#6f42c1",
        // "#e83e8c",
        "#fd7e14",
        // "#ffc107",
        "#28a745",
        // "#20c997",
        "#17a2b8",
        "#dc3545",
      ];
      const randomColor = Math.floor(Math.random() * color.length - 1);
      const style = {
        backgroundImage: `url(${movie.img})`,
      };
      const movieDetailStyle = {
        background: `linear-gradient(180deg,rgba(76,68,65,0) 0%,${color[randomColor]} 100%)`,
      };


      // COMPONENT TO RENDER
      
      discoverComponent = (
        <Discover
          style={style}
          detail={movieDetailStyle}
          id={movie.id}
          key={movie.id}
        />
      );
      if (movie.firstAirDate !== null) {
        return (
          <li key="{movie.id}">
            <Link to={`/tv/${movie.id}`}>{discoverComponent}</Link>
          </li>
        );
      }
      return (
        <li key="{movie.id}">
          <Link to={`/movie/${movie.id}`}>{discoverComponent}</Link>
        </li>
      );
    });
  }

  return (
    <>
      <Slide styles="discover-list" isTrue={true}>
        {discover}
      </Slide>
    </>
  );
};

export default DiscoverList;
