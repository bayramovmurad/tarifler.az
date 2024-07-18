import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    createRecipe: {
        name: '',
        ingredients: '',
        instructions:'',
        imageUrl:'',
        cookingTime:'',
        userOwner:''
    },
       updateRecipe: {
        _id:'',
        name: '',
        ingredients: '',
        instructions: '',
        imageUrl: '',
        cookingTime: '',
        userOwner: ''
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
        },
        setUpdateRecipe: (state, action) => {
            const { name, value } = action.payload;
            return {
                ...state,
                updateRecipe: {
                    ...state.updateRecipe,
                    [name]: value
                },
            };
        },
        setUpdateField: (state,action) => {
            state.updateRecipe = action.payload
        },
        clearUpdateRecipe: (state) => {
            state.updateRecipe = initialState.updateRecipe
        },
    },
});

export const { setCreateRecipe,clearRecipe,setUpdateRecipe,clearUpdateRecipe,setUpdateField } = recipeSlice.actions;
export default recipeSlice.reducer;