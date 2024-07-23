import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query"
import recipeApi from "../api/recipeApi";

export const useGetRecipes = () => {
    return useQuery('recipe', async () => {
        const { data } = await recipeApi.get('/');
        return data;
    });
};

export const useAddRecipe = () => {
    const queryClient = useQueryClient();
    return useMutation(async (recipe) => {
        const { data } = await recipeApi.post('/', recipe);
        return data
    },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('recipe');
            },
        });
};

export const useUpdateRecipe = () => {
    const queryClient = useQueryClient();
    return useMutation(async ({ _id, name, ingredients, instructions, imageUrl, cookingTime }) => {
        const { data } = await recipeApi.put(`/${_id}`, { name, ingredients, instructions, imageUrl, cookingTime });
        return data;
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries('recipe');
        },
    });
};

export const useDeleteRecipe = () => {
    const queryClient = useQueryClient();
    return useMutation(async ({_id}) => {
        const { data } = await recipeApi.delete(`/${_id}`);
        return data;
    },{
        onSuccess: () => {
            queryClient.invalidateQueries('recipe');
        },
    });
};