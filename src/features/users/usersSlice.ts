import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AllUsers from "../../pages/allusers";

interface User {
  id: number;
  name: string;
  email: string;
  homeId?: number | null;
}

export type UserState = {
  users: User[]
}


const initialState = {allUsers:[], registration:{registering:false, current:{}}}

// type userReducer = typeof initialState

const postSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload
      })
      .addCase(addUser.pending, (state, action) => {
        state.registration.registering = true;
        // state.registration.current = action

      })
  }
})

export default postSlice.reducer

//maybe put all thunks in one place?
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const fetched =  await axios.get('http://localhost:3000/api/users')
  return fetched.data as User[]
})

export const addUser = createAsyncThunk('users/addUser', async (newUserObj)=>{
  await axios.post('http://localhost:3000/api/user/addUser',newUserObj)
})