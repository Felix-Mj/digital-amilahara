import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  LogIn: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.LogIn = true;
    },
    signInFailure: (state, action) => {
      state.LogIn = false;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
