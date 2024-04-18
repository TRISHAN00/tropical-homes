import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get} from "../../network/AxiosService";
// import {fetchPosts} from "../../thunk/home";

const initialState = {
    loading: false,
    posts: [],
    error: "",
    detail: [],
    detailLoading: false,
    detailError: "",
};

export const fetchPosts = createAsyncThunk("post/fetchPost", (params) => {
    return get(params);
});

export const fetchPostDetail = createAsyncThunk("posts/fetchPostsDetail", (params) => {
    return get(params);
});


const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.posts = [];
            state.error = "";
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = "";
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error;
        });
        builder.addCase(fetchPostDetail.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchPostDetail.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchPostDetail.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
});

export default postSlice.reducer;
