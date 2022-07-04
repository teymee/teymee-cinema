import { Link } from "react-router-dom";
import Item from "./pages/List/Item";
import SkeletonCard from "./pages/UI/Skeleton/SkeletonCard";

const KEY = "adc90dd6664ef4f2fd253881892bda1d";
const BASE_URL = "https://api.themoviedb.org/3/";

// MOVIE, LIST AND CATEGORY COMPONENT

const dataCheck = (data, type, category) => {
  let checkTv = category.includes("tvseries");

  if (type === "list") {
    const posterCheck = data.filter((data) => {
      return data.poster_path !== null;
    });

    const backdropCheck = posterCheck.filter((data) => {
      return data.backdrop_path !== null;
    });

    const noGenre = backdropCheck.filter((data) => {
    
      return data.genre_ids !== undefined;
    });

    const noReality = noGenre.filter((item) => {
      return item.genre_ids.indexOf(10764) === -1;
    });
    const noNews = noReality.filter((item) => {
      return item.genre_ids.indexOf(10763) === -1;
    });
    const noTalk = noNews.filter((item) => {
      return item.genre_ids.indexOf(10767) === -1;
    });

    const newData = noTalk.filter((data) => {
      let check;

      if (data.media_type === "tv" || checkTv || data.name) {
        check = data.name !== undefined;
      } else if (data.media_type === "movie" || !checkTv) {
        check = data.title !== undefined;
      }

      return check;
    });

    const transformed = newData.map((data) => {
      let title, firstAirDate;
      if (data.media_type === "tv" || checkTv || data.name) {
        title = data.name;
        firstAirDate = data.first_air_date;
      } else if (data.media_type === "movie" || !checkTv) {
        title = data.title;
        firstAirDate = null;
      }

      return {
        img: `${API.IMG_URL_CARD}${data.poster_path}`,
        backImg: `${API.IMG_URL}${data.backdrop_path}`,
        synopsis: data.overview,
        releaseDate: data.release_date,
        id: data.id,
        runtime: data.runtime,
        title,
        firstAirDate,
        rating: data.vote_average,
        genre: data.genre_ids,
      };
    });

    return transformed;
  }

  if (type === "movie-detail") {
    let title, firstAirDate, numberSeason;
    if (category.includes("tv")) {
      title = data.name;
      firstAirDate = data.first_air_date;
      numberSeason = data.last_episode_to_air.season_number;
    } else {
      title = data.title;
      firstAirDate = null;
      numberSeason = null;
    }

    const transformed = {
      img: `${API.IMG_URL}${data.backdrop_path}`,
      posterImg: `${API.IMG_URL_CARD}${data.poster_path}`,
      posterImg500: `${API.IMG_URL_CARD_500}${data.poster_path}`,
      budget: data.budget,
      synopsis: data.overview,
      popularity: data.popularity,
      company: data.production_companies,
      releaseDate: data.release_date,
      revenue: data.revenue,
      runtime: data.runtime,
      title: title,
      firstAirDate,
      rating: data.vote_average,
      genre: data.genres,
      video: data.videos.results,
      cast: data.credits.cast,
      seasonNumber: numberSeason,
    };

    return transformed;
  }
};

//URL
const url1 = (title) => {
  return `https://www.thenetnaija.com/search?folder=videos&t=${title
    .replace(/:/g, "")
    .replace(/'/g, "")
    .replace(/ /g, "+")}`;
};

const url2 = (title) => {
  return `https://www.tfp.is/?s=${title
    .replace(/:/g, "")
    .replace(/'/g, "")
    .replace(/ /g, "+")}`;
};

const url3 = (title) => {
  return `https://pahe.ph/?s=${title
    .replace(/:/g, "")
    .replace(/'/g, "")
    .replace(/ /g, "+")}`;
};

// FINAL RENDER LOGIC
const finalRender = (isLoading, movie) => {
  let content;
  if (!isLoading) {
    content = movie.map((el) => {
      let title = API.SLIM_TITLE(el.title, 12, 15);
      if (el.firstAirDate !== null) {
        return (
          <Link to={`/tv/${el.id}`} key={el.id}>
            <Item title={title} rating={el.rating} img={el.img} />
          </Link>
        );
      } else {
        return (
          <Link to={`/movie/${el.id}`} key={el.id}>
            <Item title={title} rating={el.rating} img={el.img} />
          </Link>
        );
      }
    });
  } else {
    content = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
      return <SkeletonCard key={el} />;
    });
  }

  return content;
};

//GENERATE RANDOM MOVIES
let randomMovie = (data) => {
  const rand = Math.floor(Math.random() * data.length) + 1;
  return data[rand];
};

// DETAILS
const runtime = (n) => {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);

  if (rhours === 1) {
    return rhours + "hr " + rminutes + "mins";
  } else if (rhours > 1) {
    return rhours + " hrs " + rminutes + " mins";
  }

  if (rhours === 0) {
    return rminutes + " mins";
  }
};

const slimTitle = (title, size, subSize) => {
  const length = size;
  const slimTitle =
    title.length > length ? `${title.substring(0, subSize)}...` : title;

  return slimTitle;
};

//BUDGET OR COST
const Cost = (money) => {
  let cost = money.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (cost === "$0.00" || cost === " " || cost === "") {
    cost = "---";
  }

  return cost;
};

//GENRELIST
const GenreList = (genres, bannergenre1) => {
  let newGenre = genres.filter((genre) => {
    let bannergenre = bannergenre1 || "";

    return bannergenre.includes(genre.id);
  });

  const genreList = newGenre.map((el, index) => {
    return (
      <li
        style={{
          display: "inline-block",
          marginRight: "10px",
          fontSize: "12px",
        }}
        key={index}
      >
        <Link to={`/genre/${el.id}`}>{el.name}</Link>
      </li>
    );
  });
  return genreList;
};

const API = {
  BASE_URL: "https://api.themoviedb.org/3/",
  KEY: "adc90dd6664ef4f2fd253881892bda1d",
  IMG_URL_CARD: "https://image.tmdb.org/t/p/w200",
  IMG_URL_CARD_500: "https://image.tmdb.org/t/p/w500",
  IMG_URL: "https://image.tmdb.org/t/p/original",
  DISCOVER: `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`,
  TRENDING: "trending/movie/day?api_key=",
  AIRING: "tv/airing_today?api_key=",
  TOP_RATED: "movie/top_rated?api_key=",
  TV: "tv/popular?api_key=",
  SEARCH_QUERY: `${BASE_URL}search/multi?api_key=${KEY}&query=`,
  DATA_CHECK: dataCheck,
  SLIM_TITLE: slimTitle,
  randomMovie,
  RUNTIME: runtime,
  Cost,
  GenreList,
  finalRender,
  url1,
  url2,
  url3,
  GENRE: `${BASE_URL}genre/movie/list?api_key=${KEY}&language=en-US`,
};

export default API;
