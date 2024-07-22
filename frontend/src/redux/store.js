import { configureStore } from '@reduxjs/toolkit';
import { recipeApiSlice } from './recipe/recipeApiSlice';

export const store = configureStore({
    reducer: {
        [recipeApiSlice.reducerPath]: recipeApiSlice.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([recipeApiSlice.middleware]),
})