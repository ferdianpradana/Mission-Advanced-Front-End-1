import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMyList, addToMyList, updateMyListItem, removeFromMyList } from "../../services/api/mylist";

export const fetchMyList = createAsyncThunk("mylist/fetchMyList", async () => {
    return await getMyList();
});

export const addMovieToList = createAsyncThunk("mylist/addMovieToList", async (movie) => {
    return await addToMyList(movie);
});

export const updateMyListMovie = createAsyncThunk("mylist/updateMyListMovie", async ({ id, data }) => {
    return await updateMyListItem(id, data);
});

export const removeMovieFromList = createAsyncThunk("mylist/removeMovieFromList", async (id) => {
    await removeFromMyList(id);
    return id;
});

const mylistSlice = createSlice({
    name: "mylist",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMyList.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchMyList.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchMyList.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addMovieToList.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateMyListMovie.fulfilled, (state, action) => {
                const index = state.items.findIndex((item) => item.id === action.payload.id);
                if (index !== -1) state.items[index] = action.payload;
            })
            .addCase(removeMovieFromList.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            });
    },
});

export default mylistSlice.reducer;
