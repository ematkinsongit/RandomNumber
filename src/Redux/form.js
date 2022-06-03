import { createSlice } from "@reduxjs/toolkit";
import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
const slice = createSlice({
  name: "formReducer",
  initialState: {
    min: 1,
    max: 100,
    count: 3,
  },
  reducers: {
    submitRequest: (state, action) => {
      (state.min = action.payload.min),
        (state.max = action.payload.max),
        (state.count = action.payload.count);
    },
    resetRequest: (state, action) => {
      (state.min = 1), (state.max = 100), (state.count = 3);
    },
  },
});
export default slice.reducer;

const { submitRequest, resetRequest } = slice.actions;
export const submit = ({ min, max, count }) => async (dispatch) => {
  try {
    axios
      .get(
        `http://randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=${count}`
      )
      .then((result) => {
        const newnum = result.data;
        console.log(newnum);
        return newnum;
      });
  } catch (e) {
    return console.error(e.message);
  }
};
