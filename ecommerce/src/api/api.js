// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
//     endpoints: (builder) => ({
//         login: builder.mutation({
//             query: (body) =>({
//                 url: "/auth/login",
//                 method: "POST",
//                 body
//             })
//         })
//         getAllProducts:builder.query({
//             query:()=>"/products"
//         })
//     })
// })

// export const {useLoginMutation} = api;



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body
            })
        }),

        getAllProducts: builder.query({
            query: () => "/products"
        })
    })
});

export const {
    useLoginMutation,
    useGetAllProductsQuery
} = api;