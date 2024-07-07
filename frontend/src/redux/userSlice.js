import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    createForm: {
        username:"",
        password:"",
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCreateForm: (state, action) => {
            const { name, value } = action.payload;
            return {
                ...state,
                createForm: {
                    ...state.createForm,
                    [name]: value,
                },
            };
        },
    },
});

export const {setCreateForm} = userSlice.actions;
export default userSlice.reducer;