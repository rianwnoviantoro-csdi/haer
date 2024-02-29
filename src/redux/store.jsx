import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import commonReducer from "./features/common/common.slice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
  devTools: true,
});

setupListeners(store.dispatch);
