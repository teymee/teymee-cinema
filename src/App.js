import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// import Nav from "./components/Nav/Nav";
import 'font-awesome/css/font-awesome.min.css';
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Movie from "./pages/Movie/Movie";
import API from "./Api";
import { genreAction } from "./store/genre-slice";
import { useDispatch } from "react-redux";
import Category from "./pages/List/Category";
import Search from "./pages/List/Search";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function genreList() {
      try {
        const response = await fetch(API.GENRE);
        const data = await response.json();
        const result = await data.genres;

        dispatch(genreAction.addGenre(result));
      } catch (e) {
        console.log(`${e} from GenreList`);
      }
    }

    genreList();
  }, [dispatch]);

  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route path="/search/:query" component={Search} exact />
        <Route path="/category/:name" component={Category} exact />
        <Route path="/genre/:id" component={List} exact />
        <Route path="/tv/:id" component={Movie} exact />
        <Route path="/movie/:id" component={Movie} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
