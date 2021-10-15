import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams,useLocation} from "react-router-dom";

import API from "../../Api";
import ErrorBoundary from "../UI/ErrorBoundary";
import Layout from "./Layout";

function Category() {
  const [movie, setMovie] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState();
  const category = useParams().name;
  const paginationRedux = useSelector((state) => state.pagination);
  const curPage = paginationRedux.curPage;

  let api, bannerData;
  const location = useLocation().pathname

  switch (category) {
    case "trending":
      api = API.TRENDING;
      break;
    case "top_rated":
      api = API.TOP_RATED;
      break;
    case "tvseries":
      api = API.TV;
      break;
    case "airing":
      api = API.AIRING;
      break;
    default:
      api = API.TRENDING;
  }


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let initialApi
      if(location.includes('airing')){
        initialApi = `${API.BASE_URL}${api}${API.KEY}&page=${curPage + 1}`;
      }else{
        initialApi = `${API.BASE_URL}${api}${API.KEY}&page=${curPage }`;
      }
     
      const response = await fetch(initialApi);
      const data = await response.json();
      const newData = await API.DATA_CHECK(data.results, "list", category);
      setPages(data.total_pages);
      setMovie(newData);
    }

    fetchData();
    
    
  }, [api, curPage, category,location]);

  setTimeout(()=>setIsLoading(false),2500)
  // FINAL RENDER LOGIC
  let finalRender = API.finalRender(isLoading, movie);
  if (!isLoading) {
    bannerData = API.randomMovie(movie);
  }

  return (
    <>
      <ErrorBoundary>
        <Layout
          curPage={curPage}
          pages={pages}
          bannerData={bannerData}
          isLoading={isLoading}
        >
          {finalRender}
        </Layout>
      </ErrorBoundary>
    </>
  );
}

export default Category;
