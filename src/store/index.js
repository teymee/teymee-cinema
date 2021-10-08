import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./genre-slice";
import paginationSlice from "./pagination-slice";

const store = configureStore({
  reducer: { genre: genreSlice.reducer, pagination:paginationSlice.reducer },
});

export default store;
