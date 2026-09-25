import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({

    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://project-gutenberg-free-books-api1.p.rapidapi.com",

        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", "2816dc8096msh9633de79a50886dp15796bjsn66c594f9e11e");
            headers.set(
                "x-rapidapi-host",
                "project-gutenberg-free-books-api1.p.rapidapi.com"
            );

            return headers;
        }
    }),

    endpoints: (builder) => ({

        getAllBooks: builder.query({
            query: () => ({
                url: "/books",
                method: "GET"
            })
        })

    })
});

export const {
    useGetAllBooksQuery
} = api;