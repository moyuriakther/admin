import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-backend-flax.vercel.app",
    prepareHeaders: async (headers, { getState }) => {
      const tokenInfo = getState().auth;
      console.log(tokenInfo);
      const tokenData = JSON.parse(localStorage.getItem("auth"));
      // console.log(getState()?.auth);
      // console.log(tokenData);
      const token = tokenData?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
