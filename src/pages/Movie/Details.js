import { useSelector } from "react-redux";
import API from "../../Api";
import "./movie.css";
import star from "../../assets/star.svg";
import { useLocation } from "react-router";

function Details(props) {
  const genres = useSelector((state) => state.genre);
  let genre = props.genre || [];
  let location = useLocation().pathname;
  let movieType = location.includes("movie");
  let genList = [];
  genList = genre.map((el) => {
    let list = [];
    list.push(el.id);

    genList.push(...list);
    return genList;
  });

  const genreList = API.GenreList(genres, genList[0]);

  const budgetCost = props.budget || "";
  const rev = props.revenue || " ";

  let revenue = API.Cost(rev);
  let budget = API.Cost(budgetCost);

  let movieTypeDate = movieType ? props.releaseDate : props.firstAirDate;
  var date = new Date(movieTypeDate).toString().split(" ");
  const finalDate = `${date[2]} ${date[1]}, ${date[3]}`;


  const title = props.title || " ";
  const url = API.url1(title);
  const url2 = API.url2(title);
  const url3= API.url3(title);

  const Runtime_SeasonNumber = (
    <div className="runtime">
      {!finalDate.includes(undefined) ? (
        <h3>
          Release Date: <em>{finalDate}</em>
        </h3>
      ) : null}
      {props.seasonNumber === null ? (
        <h3 className="season">
          Runtime: <em>{API.RUNTIME(props.runtime)}</em>
        </h3>
      ) : (
        <h3 className="season">
          Number of Season: <em>{props.seasonNumber}</em>
        </h3>
      )}
    </div>
  );

  //STYLES
  let buttonStyle = {
    border: `${props.theme} 1px solid`,
  };

  const downloadStyle = {
    backgroundColor: `${props.theme} `,
    marginLeft: "10px",
  };

  const detailStyle = {
    background: `linear-gradient(90deg, ${props.theme}95, rgba(0, 0, 0, 0.01))`,
  };

  return (
    <>
      <div className="details" style={detailStyle}>
        <div className="details-text">
          <h4 style={{ marginBottom: "10px" }}> {genreList || []}</h4>
          <h1> {title.toUpperCase()}</h1>
          {Runtime_SeasonNumber}
          <p>{props.synopsis}</p>
          <button style={buttonStyle} onClick={props.onClick}>
            View Cast
          </button>

          <a target="_blank" rel="noopener noreferrer" href={url}>
            <button style={downloadStyle}>Download with NetNaija</button>
          </a>

          <a target="_blank" rel="noopener noreferrer" href={url2}>
            <button style={downloadStyle}>Download with TFPDL</button>
          </a>

          <a target="_blank" rel="noopener noreferrer" href={url3}>
            <button style={downloadStyle}>Download with Pahe</button>
          </a>
        </div>
      </div>

      {/* MOBILE */}

      <div className="mobile-details">
        <h1 style={{ display: "inline-block" }}> {title.toUpperCase()}</h1>
        <img src={star} alt="rating" />
        <h1 style={{ display: "inline-block" }}>
          <i>{props.rating}</i>
        </h1>
        {Runtime_SeasonNumber}
        <div className="cost1">
          <h3>
            Budget: <em>{budget}</em>
          </h3>
          <h3>
            Revenue: <em>{revenue}</em>
          </h3>
        </div>
        
        <div className="synopsis">
          <h1> SYNOPSIS </h1>
          <p>{props.synopsis}</p>
          
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <button className="second-button" style={downloadStyle}>
               Download with NetNaija
            </button>
          </a>

          <a target="_blank" rel="noopener noreferrer" href={url2}>
            <button className="second-button" style={downloadStyle}>
            Download with TFPDL
            </button>
          </a>

          <a target="_blank" rel="noopener noreferrer" href={url3}>
            <button className="second-button" style={downloadStyle}>
               Download with Pahe
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Details;
