import { AnyAction, configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { ThunkMiddleware } from "redux-thunk";
import usersReducer from '../features/users/usersSlice'

//TODO im not sure if preloadedstate is actually root state

let store: EnhancedStore<{ users: { id: string; name: string; }[]; }, AnyAction, [ThunkMiddleware<{ users: { id: string; name: string; }[]; }, AnyAction, undefined>]> | undefined

const createStore = (preloadedState) => {
    return configureStore({
      reducer: {
        users: usersReducer
      },
      preloadedState,
    });
  };

export const initializeStore = (preloadedState) => {
    let _store = store ?? createStore(preloadedState)
    if (preloadedState && store) {
        _store = createStore({...store.getState(), ...preloadedState})
        store = undefined
    }

      // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store
}







// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
