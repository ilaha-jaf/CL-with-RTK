import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://northwind.vercel.app/api' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories',
            providesTags: ['Category'],
        }),
        addCategory: builder.mutation({
            query: (newCategory) => ({
                url: 'categories',
                method: 'POST',
                body: newCategory,
            }),
            invalidatesTags: ['Category'],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Category'],
        }),
        updateCategory: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `categories/${id}`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: ['Category'],
        }),

        getBasket: builder.query({
            query: () => 'basket', 
            providesTags: ['Basket'], 
        }),

        addToBasket: builder.mutation({
            query: (item) => ({
                url: 'basket',
                method: 'POST',
                body: item,
            }),
        }),
        getFavorites: builder.query({
            query: () => 'favorites', 
            providesTags: ['Favorites'], 
        }),
        addToFavorites: builder.mutation({
            query: (item) => ({
                url: 'favorites',
                method: 'POST',
                body: item,
            }),
            invalidatesTags: ['Favorites'], 
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useAddCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation,
    useAddToBasketMutation,
    useAddToFavoritesMutation,
    useGetFavoritesQuery,
    useGetBasketQuery,
} = apiSlice;
