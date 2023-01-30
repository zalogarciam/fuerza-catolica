import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeData } from "../thunks/homeThunk";

const initialState = {
  loading: false,
  error: {},
  heroProducts: [],
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
      state.heroProducts = payload;
    });
    builder.addCase(fetchHomeData.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.heroProducts = [];
    });
  },
});

export default homeSlice.reducer;
