import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    recipes: []
}

const recipeSlice =  createSlice({
    name: 'recipe',
    initialState,
    reducers:{
        setRecipesData: (state, action) => {
            state.recipes = action.payload
        }
    }
});

export const {setRecipesData} = recipeSlice.actions;
export default recipeSlice;