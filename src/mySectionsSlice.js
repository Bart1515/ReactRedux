import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const mySectionsSlice = createSlice({
  name: "mySections",
  initialState: [],
  reducers: {
    // Behöver inte gör nytt objekt
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      _.remove(state, function (s) {
        return s.id === action.payload.id;
      });
    },
    reset: (state, action) => {
      state = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, reset } = mySectionsSlice.actions;

export default mySectionsSlice.reducer;
