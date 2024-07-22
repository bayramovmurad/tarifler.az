import api from "../api/api";
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetUser = () => {
    return useQuery('user', async () => {
        const { data } = await api.get('/profile');
        return data;
    });
};

export const useAddRegisterUser = () => {
    const queryClient = useQueryClient();
    return useMutation(async (user) => {
        const { data } = await api.post('/register', user);
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
        const { data } = await api.post('/login', user);
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
        const { data } = await api.put(`/update/${_id}`, { username });
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
        const { data } = await api.delete(`/delete/${_id}`);
    },{
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        }
    })
}   