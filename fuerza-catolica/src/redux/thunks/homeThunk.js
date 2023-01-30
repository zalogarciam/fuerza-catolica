import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Fetching home data");

      const options = {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
      };
      const { data } = await axiosInstance(options);
      console.log(data);
      return data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
