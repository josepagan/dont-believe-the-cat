import {  configureStore,  ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkMiddleware } from "redux-thunk";
import usersReducer from '../features/users/usersSlice'

let store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
const createStore = (preloadedState) => {
  return configureStore({
    reducer: {
      users: usersReducer,
    },
    preloadedState,
  });
};

//TODO probably copy the functions from that place and see if it would work with that :()

export default function initialiseStore(preloadedState?: RootState) {
  //if store does not exist create a brand new _store
  let _store = store ?? createStore(preloadedState)
  //if store existed then merge with new preloaded stte
  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
     store = undefined;
   }
     // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}