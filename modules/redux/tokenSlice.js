import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  csrfToken: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.csrfToken = action.payload.csrfToken;
    },
  },
});

export const { saveToken } = tokenSlice.actions;
export default tokenSlice.reducer;
