import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allProductsList: builder.query({
      query: () => `/api/products/allProducts`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `api/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/api/products`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: product } = await queryFulfilled;
          // console.log(product);
          dispatch(
            apiSlice.util.updateQueryData(
              "allProductsList",
              undefined,
              (draft) => {
                draft.push(product);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    editProduct: builder.mutation({
      query: ({ _id, product }) => ({
        url: `/api/products/${_id}`,
        method: "PUT",
        body: product,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: product } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData(
              "getSingleProduct",
              arg._id,
              (draft) => {
                console.log(draft);
                return product;
              }
            )
          );
          dispatch(
            apiSlice.util.updateQueryData(
              "allProductsList",
              undefined,
              (draft) => {
                return draft.map((item) =>
                  item._id === product._id ? product : item
                );
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `api/products/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: product } = await queryFulfilled;
          console.log(product);
          dispatch(
            apiSlice.util.updateQueryData(
              "allProductsList",
              undefined,
              (draft) => {
                return draft.filter((item) => item._id !== arg);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const {
  useAllProductsListQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = quizMarkApi;
