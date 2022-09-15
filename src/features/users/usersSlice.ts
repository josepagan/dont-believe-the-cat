import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  homeId?: number | null;
}

export type UserState = {
  users: User[]
}


const initialState = []

// type userReducer = typeof initialState

const postSlice = createSlice({
  name: 'user',
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
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const fetched =  await axios.get('http://localhost:3000/api/users')
  return fetched.data as User[]
})