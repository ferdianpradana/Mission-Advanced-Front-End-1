import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import mylistReducer from "./mylistSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        mylist: mylistReducer,
    },
});
