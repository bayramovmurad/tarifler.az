import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';

export const recipeApiSlice = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_KEY_RECIPES}),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => '/',
            providesTags: ['Receipe'],
        }),
    })
});

export const {useGetRecipesQuery} = recipeApiSlice;