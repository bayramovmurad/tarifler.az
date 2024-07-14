import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../utils/token';


export const userApiSlice = createApi({
    reducerPath: 'userApi',
    tagTypes: ["Users"],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_KEY_USERS,
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => '/profile'
        }),
        addRegisterUser: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: "POST",
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        addLoginUser: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: "POST",
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation({
            query: ({id,username}) => ({
                url: `/update/${id}`,
                method: "PUT",
                body:{username}
            }),
            invalidatesTags:['Users']
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/delete/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.removeItem('token')}`
                }
            }),
            invalidatesTags: ['Users']
        }),
    })
});

export const { useGetUserQuery, useAddRegisterUserMutation, useAddLoginUserMutation,useUpdateUserMutation,useDeleteUserMutation } = userApiSlice;