import {  configureStore,  ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkMiddleware } from "redux-thunk";
import usersReducer from '../features/users/usersSlice'
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => configureStore({
  reducer: {
      user: usersReducer
  },
  devTools: true
})

// let store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore ['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<AppStore ['dispatch']>
export const useAppDispatch: () => AppDispatch = useDispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;



export const wrapper = createWrapper<AppStore>(makeStore)


//TODO probably copy the functions from that place and see if it would work with that :()

