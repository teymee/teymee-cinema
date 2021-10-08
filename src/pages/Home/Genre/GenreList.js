import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Slide from "../../UI/slide";
import API from "../../../Api";
import Genre from "./Genre";
import "./Genre.css";
import { genreAction } from "../../../store/genre-slice";

function GenreList() {
  const dispatch = useDispatch();
  const [genres, setGenre] = useState([]);

  useEffect(() => {
    async function genreList() {
      try {
        const response = await fetch(API.GENRE);
        const data = await response.json();
        const result = await data.genres;

        setGenre(result);
        dispatch(genreAction.addGenre(result));
      } catch (e) {
        console.log(`${e} from GenreList`);
      }
    }

    genreList();
  }, [dispatch]);

  let genre;
  if (genres.length > 0) {
    genre = genres.map((gen, index) => {
      return (
        <li key={gen.id} className="list">
          <Link to={`/genre/${gen.id}`}>
            <Genre genre={gen.name} />
          </Link>
        </li>
      );
    });
  }

  return <Slide styles="genre-list">{genre}</Slide>;
}

export default GenreList;
