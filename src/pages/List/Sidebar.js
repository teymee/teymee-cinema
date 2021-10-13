import React from "react";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation,NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slide from "../UI/slide";
import "./List.css";

function Sidebar(props) {
  const genre = useSelector((state) => state.genre);

  const location = useLocation().pathname;

  const content = genre.map((genre) => {
    //CHECK CURRENT PATH
    let style = "gen-list";

    if (location.includes("genre")) {
      style = Number(props.listId) === genre.id ? "active1" : "gen-list";
    }

    return (
      <Link to={`/genre/${genre.id}`} key={genre.id}>
        <li className={style}>{genre.name}</li>
      </Link>
    );
  });

  return (
    <div className="side-bar">
      <div className="first-nav">
        <ul>
          <NavLink
            to="/category/airing"
            activeClassName= "selected"
          >
            <li onClick={props.catNav}>
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                color="#B2325D"
                style={{ paddingRight: "2px" }}
              />
              Airing Today
            </li>
          </NavLink>

          <NavLink to="/category/trending"  activeClassName= "selected">
            <li onClick={props.catNav}>
              <FontAwesomeIcon
                icon={faLocationArrow}
                color="#B2325D"
                style={{ paddingRight: "2px" }}
              />
              Trending
            </li>
          </NavLink>

          <NavLink to="/category/top_rated"  activeClassName= "selected">
            <li onClick={props.catNav}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                color="#B2325D"
                style={{ paddingRight: "2px" }}
              />
              Top Rated
            </li>
            
          </NavLink>
          <NavLink to="/category/tvseries"  activeClassName= "selected">
            <li onClick={props.catNav}>
              {" "}
              <FontAwesomeIcon
                icon={faTv}
                color="#B2325D"
                style={{ paddingRight: "2px" }}
              />{" "}
              TV series
            </li>
          </NavLink>
        </ul>
      </div>

      <Slide styles="second-nav">{content}</Slide>
    </div>
  );
}

export default Sidebar;
