import Cast from "./Cast";

import "./Cast.css";

import Slide from "../UI/slide";

function CastList(props) {
  const cast = props.cast || [];

  const content = cast
    .filter((el) => {
      return el.profile_path !== null;
    })
    .map((el) => {
      const styles = {
        backgroundImage: `url("https://image.tmdb.org/t/p/w200${el.profile_path}")`,
      };

      return (
        <li key={el.id}>
          <Cast
            style={styles}
            name={el.name}
            popularity={el.id}
            character={el.character}
          />
        </li>
      );
    });

  return (
    <div className="cast-list">
      <h2>CAST</h2>
      <button className="cancel" onClick={props.onClick}>
        X
      </button>

      <Slide styles="container" isTrue={true} component="cast-list">
        {content}
      </Slide>
    </div>
  );
}

export default CastList;
