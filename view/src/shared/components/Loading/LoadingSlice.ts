import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  loading: boolean;
}

const loadingInitialState: LoadingState = { loading: false };

const loadingSlice = createSlice({
  name: "loading",
  initialState: loadingInitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
