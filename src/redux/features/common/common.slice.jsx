import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const commonAdapter = createEntityAdapter();
const initialState = commonAdapter.getInitialState();

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setShowBottomNav: (state, action) => {
      const { show } = action.payload;

      state.showBottomNavigation = show;
    },
  },
});

export const { setShowBottomNav } = commonSlice.actions;

export default commonSlice.reducer;

export const getShowBottomNav = (state) => state.common.showBottomNavigation;
