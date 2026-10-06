import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../services/api/movies";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    return await getMovies();
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default moviesSlice.reducer;
