import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  content: [],
  pages: [],
  curPage: 1,
  maxPageCount: 3,
  minPageCount: 0,
  pageNumberLimit: 3,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    curPage(state, action) {
      state.curPage = action.payload;
    },

    handleNextbtn(state, action) {
      let curPage = state.curPage;
      let maxPageCount = state.maxPageCount;
      let minPageCount = state.minPageCount;
      let pageNumberLimit = state.pageNumberLimit;
      state.curPage = curPage + action.payload;

      if (curPage + 1 > maxPageCount) {
        state.minPageCount = minPageCount + pageNumberLimit;
        state.maxPageCount = maxPageCount + pageNumberLimit;
      }

      return state;
    },

    handlePrevbtn(state, action) {
      let curPage = state.curPage;
      let maxPageCount = state.maxPageCount;
      let minPageCount = state.minPageCount;
      let pageNumberLimit = state.pageNumberLimit;

      state.curPage = curPage - action.payload;
      if ((curPage - 1) % pageNumberLimit === 0) {
        state.minPageCount = minPageCount - pageNumberLimit;
        state.maxPageCount = maxPageCount - pageNumberLimit;
      }
      return state
    },

    changePage(state, action){
        state.curPage = action.payload
        return state
    },

    pageNumbers(state, action){
        for (let i = 1; i < action.payload; i++) {
            state.pages.push(i);
          }
    }
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice;
