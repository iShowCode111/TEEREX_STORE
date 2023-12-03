import { TshirtData } from "../types/Api";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tshirtApi = createApi({
  reducerPath: "tshirtApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart",
  }),
  endpoints: (builder) => ({
    getCatalogue: builder.query<TshirtData[], "">({
      query: () => "/catalogue.json",
    }),
  }),
});

export const {
  useGetCatalogueQuery,
  reducer: tshirtApiReducer,
  reducerPath: tshirtApiReducerPath,
  middleware: tshirtApiMiddleware,
} = tshirtApi;
