import { createSlice } from "@reduxjs/toolkit";
import { ISearchResultsState } from "../../interfaces/IStoreFilteredMovie";

const initialState: ISearchResultsState = {
    filteredMovies: [],
}

const filteredMoviesSlice = createSlice({
    name: "filteredMovies",
    initialState,
    reducers: {
        setFilteredMovies: (state, action: { payload: any }) => {
            state.filteredMovies = action.payload;
        },
    }
})

export const { setFilteredMovies } = filteredMoviesSlice.actions;

export default filteredMoviesSlice.reducer;
