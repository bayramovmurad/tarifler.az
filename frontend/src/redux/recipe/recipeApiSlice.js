import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const recipeApiSlice = createApi({
    reducerPath: 'recipeApi',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_KEY_RECIPES }),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => '/',
            providesTags: ['Recipe'],
        }),
        addRecipes: builder.mutation({
            query: (recipe) => ({
                url: '/',
                method: "POST",
                body: recipe,
                providesTags: ['Recipe'],
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags: ['Recipe']
        })
    })
});

export const { useGetRecipesQuery, useAddRecipesMutation } = recipeApiSlice;