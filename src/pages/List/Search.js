import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import API from "../../Api";
import Nav from "../../components/Nav/Nav";
import Layout from "./Layout";
import empty from "../../assets/empty.svg";
import ErrorBoundary from "../UI/ErrorBoundary";

function Search() {
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState();

  const paginationRedux = useSelector((state) => state.pagination);
  const curPage = paginationRedux.curPage;
  let query;
  query = useParams().query;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let api = `${API.SEARCH_QUERY}${query}&page=${curPage}&include_adult=true`;
      let response = await fetch(api);
      let result = await response.json();
      let data = result.results;
      let newData = API.DATA_CHECK(data, "list", "search");
      setPages(result.total_pages);
      setSearch(newData);
      console.log(`${API.SEARCH_QUERY}${query}&page=${curPage}&include_adult=true`)

    }

    fetchData();

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, [query, curPage, pages]);

  // FINAL RENDER LOGIC
  let finalRender = API.finalRender(isLoading, search);

  return (
    <>
    <ErrorBoundary>

      <div className="search-list">
        <Nav />
     
      <Layout curPage={curPage} pages={pages} isLoading={isLoading}>
        <div style={{ marginTop: "100px" }}>
          {finalRender}
        </div>
      </Layout>

      {search.length === 0 && !isLoading && (
            <div className="search-error">
              <img src={empty} alt="no search found" />
              <h3>No Result Found</h3>
            </div>
          )}
      </div>
    </ErrorBoundary>
    </>
  );
}

export default Search;
