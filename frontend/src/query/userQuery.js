import userApi from "../api/userApi";
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetUser = () => {
    return useQuery('user', async () => {
        const { data } = await userApi.get('/profile');
        return data;
    });
};

export const useAddRegisterUser = () => {
    const queryClient = useQueryClient();
    return useMutation(async (user) => {
        const { data } = await userApi.post('/register', user);
        return data;
    },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('user');
            }
        });
};

export const useAddLoginUser = () => {
    const queryClient = useQueryClient();
    return useMutation(async (user) => {
        const { data } = await userApi.post('/login', user);
        return data;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        }
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation(async ({ _id, username }) => {
        const { data } = await userApi.put(`/update/${_id}`, { username });
        return data;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation(async ({_id}) => {
        const { data } = await userApi.delete(`/delete/${_id}`);
    },{
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        }
    })
}   