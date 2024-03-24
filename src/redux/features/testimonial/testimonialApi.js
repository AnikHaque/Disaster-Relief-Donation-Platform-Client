import { apiSlice } from "../api/apiSlice";

const testimonialApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    testimonialPost: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (data) => ({
        url: "/testimonial",
        method: "POST",
        body: data,
      }),
    }),

    testimonialGet: builder.query({
      // note: an optional `queryFn` may be used in place of `query`
      query: () => ({
        url: "/testimonial",
      }),
    }),
  }),
});

export const { useTestimonialPostMutation, useTestimonialGetQuery } =
  testimonialApi;
