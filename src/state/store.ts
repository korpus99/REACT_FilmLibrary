import { configureStore } from "@reduxjs/toolkit";
import filteredMovies from "./shows/filteredMovies";
import movieDetails from "./shows/movieDetails";

export const store = configureStore({
    reducer: {
        filteredMovies: filteredMovies,
        movieDetails: movieDetails,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
