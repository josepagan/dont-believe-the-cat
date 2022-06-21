import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

// type userReducer = typeof initialState

const postSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                 return action.payload.data
            })
    }
})

export default postSlice.reducer 

//maybe put all thunks in one place?
export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    return await axios.get('http://localhost:3000/api/users')
})