import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    registerUser: {
        username: "",
        password: "",
    },
    loginUser: {
        username: "",
        password: "",
    },
    isAuthenticated: false,
    userUpdate: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRegisterUser: (state, action) => {
            const { name, value } = action.payload;
            return {
                ...state,
                registerUser: {
                    ...state.registerUser,
                    [name]: value,
                },
            };
        },
        setLoginUser: (state, action) => {
            const { name, value } = action.payload;
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    [name]: value,
                },
            };
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setUserUpdate: (state, action) => {
            state.userUpdate = action.payload
        }
    },
});

export const { setRegisterUser, setLoginUser, setIsAuthenticated, setUserUpdate } = userSlice.actions;
export default userSlice.reducer;