import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./features/randomnumber/randomSlice";

export const store = configureStore({
  reducer: {
    random: randomReducer,
  },
});
