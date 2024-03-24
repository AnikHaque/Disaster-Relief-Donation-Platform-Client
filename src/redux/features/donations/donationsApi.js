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
  }),
});

export const { useDonationPostMutation } = donationsApi;
