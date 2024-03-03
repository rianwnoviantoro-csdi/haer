import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const authAdapter = createEntityAdapter();
const initialState = authAdapter.getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { data } = action.payload;

      state.account = data.user;
      state.token = data.token;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentAccount = (state) => state.auth.account;
export const selectCurrentToken = (state) => state.auth.token;
