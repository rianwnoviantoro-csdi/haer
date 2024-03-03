import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./apis/index.api";
import commonReducer from "./features/common/common.slice";
import authReducer from "./features/auth/auth.slice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(api.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
