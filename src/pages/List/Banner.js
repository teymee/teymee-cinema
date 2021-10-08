import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Nav from "../../components/Nav/Nav";
import star from "../../assets/star.svg";
import API from "../../Api";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Banner(props) {
  const genres = useSelector((state) => state.genre);

  const bannerData = props.bannerData;

  let bannergenre = bannerData.genre || [];


  const genreList  = API.GenreList(genres, bannergenre)
 
  const synopsis = API.SLIM_TITLE(bannerData.synopsis || "", 600, 600);

  const title = API.SLIM_TITLE(bannerData.title || "", 37, 36) ;
 

  const url = API.url(title);

  const style = {
    backgroundImage: `url(${bannerData.backImg})`,
  };

  let link = bannerData.firstAirDate !== null ? "/tv/" : "/movie/"

  return (
    <div className="banner" style={style}>
      <div className="background-list">
        <Nav />
        <div className="detail">
          <h4> {genreList || []}</h4>
          <h3>
            <img src={star} alt="rating" /> {bannerData.rating}
          </h3>
          <h1> {title}</h1>
          <p>{synopsis}</p>
          <div>
            
            <Link to={`${link}${bannerData.id}`}>
              <button type="button" className="btn btn-default">
              <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:"2px"}} /> 
               More Details
              </button>
            </Link>

            <button type="button" className="btn btn-default">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className="button1"
              >
               <FontAwesomeIcon icon={faAngleDoubleDown} color="ghostwhite" style={{paddingRight:"2px"}} />
                Download
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
