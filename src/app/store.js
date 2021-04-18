import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";
import mySectionsReducer from "../mySectionsSlice";

// Flera delar på samma store
export default configureStore({
  reducer: {
    counter: counterReducer,
    mySections: mySectionsReducer,
  },
});
