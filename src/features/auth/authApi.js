import { apiSlice } from "../api/apiSlice";
import { adminLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => ({
        url: "/api/users/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log(result?.data);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result?.data?.token,
              user: result?.data,
            })
          );
          dispatch(
            adminLoggedIn({ token: result?.data?.token, user: result?.data })
          );
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
    allUsersList: builder.query({
      query: () => `/api/users`,
    }),
  }),
});

export const { useAdminLoginMutation, useAllUsersListQuery } = authApi;
