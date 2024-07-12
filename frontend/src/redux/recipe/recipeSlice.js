import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    createRecipe: []
}

const recipeSlice =  createSlice({
    name: 'recipe',
    initialState,
    reducers:{
        setCreateRecipe: (state, action) => {
            state.createRecipe = action.payload
        }
    }
});

export const { setRecipesData } = recipeSlice.actions;
export default recipeSlice;