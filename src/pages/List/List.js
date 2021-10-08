import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import API from "../../Api";
import ErrorBoundary from "../UI/ErrorBoundary";
import Layout from "./Layout";
import "./List.css";

function List(props) {
  const [movie, setMovie] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState();

  let listID = useParams().id;
  const paginationRedux = useSelector((state) => state.pagination);
  const curPage = paginationRedux.curPage;
  let bannerData

  useEffect(() => {
    async function GenreList() {
      setIsLoading(true);
      const initialApi = `https://api.themoviedb.org/3/discover/movie?api_key=${API.KEY}&with_genres=${listID}&page=${curPage}`;
      const response = await fetch(initialApi);
      const data = await response.json();
      const newData =  await API.DATA_CHECK(data.results, "list", "genre");
      setPages(data.total_pages);
      setMovie(newData);
    }
    GenreList();
   
  }, [listID, curPage]);

  setTimeout(()=>setIsLoading(false),2500)
  // FINAL RENDER LOGIC
  let finalRender = API.finalRender(isLoading, movie);
  if(!isLoading){
      bannerData = API.randomMovie(movie)
  }

  return (
    <>
    <ErrorBoundary>
      <Layout
        curPage={curPage}
        pages={pages}
        bannerData={bannerData}
        listId={listID}
        isLoading={isLoading}
      >
        {finalRender}
      </Layout>

    </ErrorBoundary>
    </>
  );
}

export default List;
