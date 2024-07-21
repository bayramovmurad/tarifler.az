import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from './user/userApiSlice';
import { recipeApiSlice } from './recipe/recipeApiSlice';

export const store = configureStore({
    reducer: {
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [recipeApiSlice.reducerPath]: recipeApiSlice.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApiSlice.middleware, recipeApiSlice.middleware]),
})