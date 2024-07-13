import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import { userApiSlice } from './user/userApiSlice';
import { recipeApiSlice } from './recipe/recipeApiSlice';
import recipeSlice from './recipe/recipeSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        recipe: recipeSlice,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [recipeApiSlice.reducerPath]: recipeApiSlice.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApiSlice.middleware, recipeApiSlice.middleware]),
})