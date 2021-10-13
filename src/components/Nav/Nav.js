import React, { useState, useRef } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/teymee.png";

function Nav() {
  const [isActive, setIsActive] = useState(true);
  const inputEl = useRef("");
  const history = useHistory();
  const location = useLocation().pathname.includes("search");

  // DECLARATION
  let query1, query, classes, classesMenu;
  
  query1 = useParams().query;

  const onClickHandler = () => {
    setIsActive(!isActive);
  };

  const onSubmitHandler = () => {
    query = inputEl.current.value.replace(" ", "+").replace("?", "");
    history.push(`/search/${query}`);
  };

  classes = isActive ? "hamburger" : "hamburger active2";
  classesMenu = isActive ? "menu" : "menu active2";

  return (
    <div className="navcover">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="teymee logo" />{" "}
          </Link>
        </div>

        <ul className={classesMenu}>
          <li className="item">
            <Link to="/"> Home </Link>
          </li>
          <li className="item item2">
            <Link to="/category/airing"> Category </Link>
          </li>

          <form onSubmit={onSubmitHandler}>
            <div className="box">
              <input
                className="input-field"
                type="text"
                ref={inputEl}
                placeholder={location ? query1.replace("+", " ") : " "}
              />
              <button>
                {" "}
                <i className="fa fa-search icon" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </ul>

        {/* <!-- MENU TOGGLE BUTTON --> */}
        <div className={classes} onClick={onClickHandler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
