import { createContext, useContext, useState } from 'react';
import { useGetUser } from '../query/userQuery';
import { useGetRecipesQuery } from '../redux/recipe/recipeApiSlice';

const CreateContext = createContext();

export const ContextProvider = ({ children }) => {
    const { data: userData, error: userError, isLoading: userLoading } = useGetUser();
    const { data: recipes, isLoading: recipesLoading, error: recipesError } = useGetRecipesQuery();

    const [username, setUsername] = useState('');
    const [recipeUpdate, setRecipeUpdate] = useState('');

    const handleUpdate = (newUsername) => {
        setUsername(newUsername);
    };

    const handleRecipeUpdate = (newRecipes) => {
        setRecipeUpdate(newRecipes);
    };

    // console.log('User Data:', userData);
    // console.log('User Error:', userError);
    // console.log('Recipes Data:', recipes);
    // console.log('Recipes Error:', recipesError);

    return (
        <CreateContext.Provider
            value={{
                username,
                setUsername,
                userData,
                userLoading,
                handleUpdate,
                handleRecipeUpdate,
                recipeUpdate,
                setRecipeUpdate,
                recipes,
                recipesLoading,
            }}
        >
            {children}
        </CreateContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(CreateContext);
};
