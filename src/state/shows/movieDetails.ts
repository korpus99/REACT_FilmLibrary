import { createSlice } from "@reduxjs/toolkit";
import { IMovieDetailsState } from "../../interfaces/IStoreMovieDetails";

const initialState: IMovieDetailsState = {
    movieDetails: null,
}

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState,
    reducers: {
        setMovieDetails: (state, action: { payload: any }) => {
            state.movieDetails = action.payload;
        },
    }
})

export const { setMovieDetails } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
