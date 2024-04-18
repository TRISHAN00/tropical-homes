import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get, post} from "../../network/axiosService";


const initialState = {
    loading: false,
    posts: [],
    error: '',
    detail: [],
    detailLoading: false,
    detailError: ''
}

export const fetchContact = createAsyncThunk("fetchContact", (params) => {
    return get(params);
});

export const postForm = createAsyncThunk("contactForm", (params) => {
    return post(params);
});

const postSlice = createSlice({
    name: 'contact',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchContact.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchContact.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        //-- post
        builder.addCase(postForm.pending, (state) => {
            state.loading = true;
            state.success = [];
            state.error = "";
        });
        builder.addCase(postForm.fulfilled, (state, action) => {
            state.loading = false;
            state.success = action.payload.message;
            state.error = ""; // You can remove this line if not needed
        });
        builder.addCase(postForm.rejected, (state, action) => {
            state.loading = false;
            state.success = "";
            state.error = action.error;
        });
    }
})


export default postSlice.reducer
