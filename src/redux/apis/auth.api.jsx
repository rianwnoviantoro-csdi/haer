import { setCredentials } from "../features/auth/auth.slice";
import { api } from "./index.api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: `auth/register`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: `auth/refresh-token`,
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setCredentials({ ...data }));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: `auth/login`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useRegisterMutation: doRegister,
  useLoginMutation: doLogin,
  useRefreshMutation: doRefresh,
} = authApi;
