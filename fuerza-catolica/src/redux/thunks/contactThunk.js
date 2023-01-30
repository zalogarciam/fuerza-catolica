import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadContactData = createAsyncThunk(
  "contact/fetchReadContactData",
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/comments/1",
      };
      const { data } = await axiosInstance(options);
      console.log(data.data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
