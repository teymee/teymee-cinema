import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    checkGenre(state, action) {
      return state.find((genre) => {
        return genre.id === action.payload;
      });
    },

    addGenre(state, action) {
      state = [...action.payload];
      return state;
    },

    getGenreName(state, action){
        return state.filter((genre) => {
            return action.payload.includes(genre.id);
          }); 
 
    }
  },
});

export const genreAction = genreSlice.actions;

export default genreSlice;
