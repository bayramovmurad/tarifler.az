import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    createRecipe: {
        name: '',
        ingredients: '',
        instructions:'',
        imageUrl:'',
        cookingTime:'',
        userOwner:''
    }
}

const recipeSlice =  createSlice({
    name: 'recipe',
    initialState,
    reducers:{
        setCreateRecipe: (state, action) => {
            const {name,value} = action.payload;
            return {
                ...state,
                createRecipe:{
                    ...state.createRecipe,
                    [name]: value
                },
            };
        },
        clearRecipe: (state) => {
            state.createRecipe = initialState.createRecipe
        }
    },
});

export const { setCreateRecipe,clearRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;