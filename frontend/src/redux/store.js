import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from './user/userApiSlice';
import { recipeApiSlice } from './recipe/recipeApiSlice';
import recipeSlice from './recipe/recipeSlice';

export const store = configureStore({
    reducer: {
        recipe: recipeSlice,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [recipeApiSlice.reducerPath]: recipeApiSlice.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApiSlice.middleware, recipeApiSlice.middleware]),
})