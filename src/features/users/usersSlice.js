import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [  { id: '1', name: "Nikki" },
{ id: '2', name: 'Macarena' }]

const postSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                 return action.payload
            })
    }
})

export default postSlice.reducer

//maybe put all thunks in one place?
export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    return await axios.get('http://localhost:3000/api/users')
})