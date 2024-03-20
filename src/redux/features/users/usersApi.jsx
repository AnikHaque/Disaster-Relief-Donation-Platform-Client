import { apiSlice } from "../api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        usersPost: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            }),
        }),

       
        
    })
})

export const {useUsersPostMutation } = usersApi;

