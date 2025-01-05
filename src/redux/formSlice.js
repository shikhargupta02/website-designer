import { createSlice } from "@reduxjs/toolkit";
import { initialFormRefData } from "../utils/helper";

const formSlice = createSlice({
  name: "data",
  initialState: { form: initialFormRefData, showPortfolio: false },
  reducers: {
    updateForm: (state, action) => {
      return { ...state, form: action.payload };
    },
    updateShowPortfolio: (state, action) => {
      return { ...state, showPortfolio: action.payload };
    },
  },
});
export const selectForm = (state) => state.data.form;
export const selectShowPortfolio = (state) => state.data.showPortfolio;

export const { updateForm, updateShowPortfolio } = formSlice.actions;

export default formSlice.reducer;
