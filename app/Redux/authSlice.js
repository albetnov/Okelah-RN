import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    modifyAuth: (state, action) => {
      state.email = action.payload.email;
      state.isSignedIn = action.payload.isSignedIn;
    },
  },
});

export const { modifyAuth } = authSlice.actions;

export default authSlice.reducer;
