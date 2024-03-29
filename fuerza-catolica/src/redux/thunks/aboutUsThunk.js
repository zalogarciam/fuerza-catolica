import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadAboutUsData = createAsyncThunk(
  "aboutUs/fetchReadAboutUsData",
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
