import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
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


const initialState = {allUsers:[]}

// type userReducer = typeof initialState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload
      })
      .addCase(fetchUsers.pending, (state, action) => {
        console.log("PENDING!!!")
      })
      // .addCase(addUser.pending, (state, action) => {
      //   state.registration.registering = true;
        // state.registration.current = action
      // })
      .addCase(HYDRATE, (state, action: any) => {
        // console.log("hydrate action:", action)
        
         return {...state, ...action.payload.user}
      })
  }
})

// const reducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     }
//     if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
//     return nextState
//   } else {
//     return combinedReducer(state, action)
//   }
// }


export default userSlice.reducer

//maybe put all thunks in one place?
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const fetched =  await axios.get('http://localhost:3000/api/users')
  return fetched.data as User[]
})

export const addUser = createAsyncThunk('users/addUser', async (newUserObj)=>{
  await axios.post('http://localhost:3000/api/user/addUser',newUserObj)
})