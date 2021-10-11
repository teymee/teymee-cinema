import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import DiscoverList from "./Discover/DiscoverList";
import Nav from "../../components/Nav/Nav";
import "../../App.css";
import "./Home.css";
import PreLoader from "../UI/PreLoader";
import API from "../../Api";
import PageError from "../UI/404/404";
import ErrorBoundary from "../UI/ErrorBoundary";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import New from "../Movie/new";

function Home() {
  const genres = useSelector((state) => state.genre);
  const [isLoading, setIsLoading] = useState(true);

  const [newData, setNewData] = useState(null);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState();


  let content, style, styleTheme, link, genreList, styleThemeBorder, url, title,banner;

  useEffect(() => {
    async function randomMovies() {
      try {
        const response = await fetch(API.DISCOVER);
        const data = await response.json();
        const newData = await API.DATA_CHECK(data.results, "list", "genre");
        setNewData(newData);
        setIsLoading(false);
      } catch (e) {
        console.log(`${e} from DiscoverList`);
        setError(true);
      }
    }

    randomMovies();
   
    setTimeout(() => {
      const theme = [
        "#5b5046",
        "#b28e63",
        "#c1868d",
        "#5079c4",
        "#66bb6a",
        "#4c4441",
        "#6f42c1",
        "#20c997",
        "#17a2b8",
        "#dc3545",
      ];
      const randomColor = Math.floor(Math.random() * theme.length - 1);
      setTheme(theme[randomColor]);
    });
  }, [title]);





  if (!isLoading && theme === undefined) {
    setTheme("#66bb6a");
  }

  if (!isLoading && newData) {
    banner = API.randomMovie(newData);
    title = banner.title;
   
    url = API.url(title);

    genreList = API.GenreList(genres, banner.genre);
    link = banner.firstAirDate !== null ? "/tv/" : "/movie/";


    style = {
      backgroundImage: `url('${banner.backImg}')`,
    };
    styleTheme = {
      backgroundColor: `${theme}`,
    };
    styleThemeBorder = {
      border: `${theme} 1px solid`,
    };

    content = (
      <div className="home1">
        <div className="App">
          <Nav />
         
          <video className="myVideo" style={style}></video>
          <div className="home-details">
            <h4> {genreList || []}</h4>
            <h1 className="title">
              {title} <div className="fullstop" style={styleTheme}></div>
            </h1>

            <div>
              <Link to={`${link}${banner.id}`}>
                <button
                  type="button"
                  className="btn btn-default"
                  style={styleTheme}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    color="white"
                    style={{ paddingRight: "2px" }}
                  />
                  More Details
                </button>
              </Link>

              {url !== null && (
                <button
                  type="button"
                  className="btn btn-default"
                  style={styleThemeBorder}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={url}
                    className="button1"
                  >
                    <FontAwesomeIcon
                      icon={faAngleDoubleDown}
                      color="ghostwhite"
                      style={{ paddingRight: "2px" }}
                    />{" "}
                    Download
                  </a>
                </button>
              )}
            </div>
          </div>

          <div className="home-middle">
            <DiscoverList />
          </div>
        </div>
      </div>
    );
  }

  const finalRender = isLoading || banner === {} ? <PreLoader /> : content;

  return <ErrorBoundary>{error ? <PageError /> : finalRender}</ErrorBoundary>;
}

export default Home;
