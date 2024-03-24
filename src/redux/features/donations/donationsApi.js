import { apiSlice } from "../api/apiSlice";

const donationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    donationPost: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (data) => ({
        url: "/donation",
        method: "POST",
        body: data,
      }),
    }),

    donationsGet: builder.query({
      // note: an optional `queryFn` may be used in place of `query`
      query: () => ({
        url: "/donations",
      }),
    }),
  }),
});

export const { useDonationPostMutation } = donationsApi;
