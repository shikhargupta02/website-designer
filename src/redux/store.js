import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice"; // Adjust the path based on your folder structure

const store = configureStore({
  reducer: {
    data: formReducer, // Matches the `name` field in your slice
  },
});

export default store;
