import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import API from "../../Api";
import "./movie.css";
import "../../App.css";
import PreLoader from "./../UI/PreLoader";
import Nav from "../../components/Nav/Nav";
import Details from "./Details";
import Trailers from "./Trailers/Trailers";
import Rating from "./Rating";
import Cost from "./Cost";
import CastList from "../Cast/CastList";
import ErrorBoundary from "../UI/ErrorBoundary";

function Movie() {
  const [newData, setNewData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const location = useLocation().pathname;
  const movieId = useParams().id;
  
  let movieType = location.includes("tv") ? "tv" : "movie";

  useEffect(() => {
    setIsLoading(true);
    async function fetchedMovie() {
      const response = await fetch(
        `${API.BASE_URL}${movieType}/${movieId}?api_key=${API.KEY}&language=en-US&&append_to_response=videos,images,credits`
      );

      const data = await response.json();
      const newData = await API.DATA_CHECK(data, "movie-detail", movieType);
      setNewData(newData);
    }
    fetchedMovie();

    setTimeout(() => {
      const theme = [
        "#5b5046",
        "#b28e63",
        "#c1868d",
        "#5079c4",
        "#4c4441",
        "#6f42c1",
        "#dc3545",
      ];
      const randomColor = Math.floor(Math.random() * theme.length - 1);
      setTheme(theme[randomColor]);
      setIsLoading(false);
    }, 1500);
  }, [movieId, movieType]);

  // DECLARATION
  let content,
    style,
    title,
    styleMobile,
    styleMobilePoster,
    rating,
    movie,
    trailerComponent,
    castComponent,
    styleMobileDisplay,
    detailComponent;
  movie = null;
  style = {};
  styleMobile = {};
  styleMobilePoster = {};
  styleMobileDisplay = {};

  if (!isLoading) {
    const onClickHandler = () => {
      setIsClicked(!isClicked);
    };

    movie = newData;

    title = movie.title;

    rating = movie.rating;

    detailComponent = (
      <Details
        title={title}
        synopsis={movie.synopsis}
        theme={theme}
        runtime={movie.runtime}
        genre={movie.genre}
        onClick={onClickHandler}
        releaseDate={movie.releaseDate}
        movieType={movieType}
        firstAirDate={movie.firstAirDate}
        budget={movie.budget}
        revenue={movie.revenue}
        rating={movie.rating}
        seasonNumber={movie.seasonNumber}
      />
    );

    castComponent = (
      <CastList cast={movie.cast} theme={theme} onClick={onClickHandler} />
    );
    trailerComponent = <Trailers video={movie.video} />;

    style = {
      backgroundImage: `url('${movie.img}')`,
    };

    styleMobile = {
      backgroundColor: `${theme}30`,
    };

    styleMobilePoster = {
      backgroundImage: `url('${movie.posterImg500}')`,
    };

    

  

    content = (
      <>
        <div className="web-movie">
          <div className="App">
            <header id="banner" style={style}>
              <div className="App">
                <Nav />
                {movie && detailComponent}
                {trailerComponent}
                <Rating theme={theme} rating={rating} />
                <Cost
                  theme={theme}
                  revenue={movie.revenue}
                  budget={movie.budget}
                  company={movie.company}
                />
                {isClicked && castComponent}
              </div>
            </header>
          </div>
        </div>

        {/* MOBILE VIEW */}

        <div className="mobile-movie" style={styleMobile}>
          <Nav />
          <div style={styleMobilePoster} className="mobile-poster"></div>

          <div className="mobile-body">
            <div  className="mobile-details1">
            {detailComponent}
            </div>

            
            <div className="mobile-cast">{castComponent}</div>
            <div className="mobile-trailer">
              <h2> TRAILER(S)</h2>
              <Trailers video={movie.video} style={styleMobileDisplay} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    content = <PreLoader />;
  }

  if (!isLoading && theme === undefined) {
    setTheme("#4c4441");
  }

  return (
    <>
      <ErrorBoundary>{content}</ErrorBoundary>
    </>
  );
}

export default Movie;
