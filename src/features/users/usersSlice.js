import { createSlice } from "@reduxjs/toolkit";

const initialState = [  { id: '1', name: "Nikki" },
{ id: '2', name: 'Macarena' }]

const postSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default postSlice.reducer
