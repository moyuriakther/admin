import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allOrdersList: builder.query({
      query: () => `/api/orders/all`,
    }),
    getOrderDetails: builder.query({
      query: (id) => `/api/orders/${id}`,
    }),
    makeOrderDelivered: builder.mutation({
      query: (order) => ({
        url: `/api/orders/${order._id}/delivered`,
        method: "PUT",
        // body: data,
      }),
    }),
  }),
});
export const {
  useAllOrdersListQuery,
  useGetOrderDetailsQuery,
  useMakeOrderDeliveredMutation,
} = quizMarkApi;
