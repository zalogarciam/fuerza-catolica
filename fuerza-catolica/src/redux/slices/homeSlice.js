import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeData } from "../thunks/homeThunk";

const initialState = {
  loading: false,
  error: {},
  homeData: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomeData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.homeData = payload;
    });
    builder.addCase(fetchHomeData.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.homeData = [];
    });
  },
});

export default homeSlice.reducer;
