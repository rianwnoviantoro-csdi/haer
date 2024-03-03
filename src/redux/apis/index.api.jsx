import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";
import { logout, setCredentials } from "../features/auth/auth.slice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refresh = await baseQuery("auth/refresh-token", api, extraOptions);

    if (refresh?.data) {
      api.dispatch(setCredentials(refresh.data));
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
