import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const RANDOM_URL = "http://randomnumberapi.com/api/v1.0/random?";

const initialState = {
  min: 0,
  max: 10,
  count: 1,
};
export const fetchRandomNumbers = createAsyncThunk(
  "random/fetchRandomNumbers",
  async (min, max, count) => {
    try {
      const response = await axios.get(
        `${RANDOM_URL}min=${min}&max=${max}&count=${count}`
      );
      return [...response.data];
    } catch (err) {
      return err.message;
    }
  }
);
const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRandomNumbers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectRandom = (state) => state.random;
export default randomSlice.reducer;
