import {  configureStore,  ThunkAction, Action } from "@reduxjs/toolkit";
import { ThunkMiddleware } from "redux-thunk";
import usersReducer from '../features/users/usersSlice'


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


let store




export default function getStore(incomingPreloadState?: RootState) {
  const preloadedState = store ? {...incomingPreloadState, ...store.getState()} : {...incomingPreloadState}

  store = configureStore({
    reducer: {
      users: usersReducer,
    },
    // preloadedState: {...incomingPreloadState, ...prevState},
    preloadedState
    //because in getServersideProps i use it empty of course it washes the store off i need to sort that out
  });
  return store;
}