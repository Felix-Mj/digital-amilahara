import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  LogIn: false,
  loading: false,
  roll: "user"
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
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
    },
    logOutStart: (state) => {
      state.loading = true;
    },
    logOutSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.LogIn = false;
    },
    logOutFailure: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  logOutStart,
  logOutSuccess,
  logOutFailure,
} = userSlice.actions;

export default userSlice.reducer;
