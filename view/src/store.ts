import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./shared/components/Loading/LoadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
