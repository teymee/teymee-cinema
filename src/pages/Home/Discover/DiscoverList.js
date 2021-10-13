import { Link } from "react-router-dom";

import Discover from "./Discover";
import "./Discover.css";
import Slide from "../../UI/slide";

const DiscoverList = ({ discoverMovies }) => {
  let discover, discoverComponent;

  if (discoverMovies.length > 0) {
    discover = discoverMovies.map((movie) => {
      // STYLES
      const color = ["#fd7e14", "#28a745", "#17a2b8", "#dc3545"];
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
