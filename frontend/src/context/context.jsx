import { createContext, useContext, useState } from "react"
import { useGetUserQuery } from "../redux/user/userApiSlice";
import { useGetRecipesQuery } from "../redux/recipe/recipeApiSlice";

const CreateContext = createContext();

export const ContextProvider = ({children}) => {
    const { data: user, isLoading: userLoading } = useGetUserQuery();
    const { data: recipes, isLoading } = useGetRecipesQuery();
    const [username, setUsername] = useState('');
    const [recipeUpdate, setRecipeUpdate] = useState('');

    const handleUpdate = (newUsername) => {
        setUsername(newUsername);
    };

    const handleRecipeUpdate = (newRecipes) => {
        setRecipeUpdate(newRecipes);
    }

    return(
        <CreateContext.Provider value={{username,setUsername,user,userLoading,handleUpdate, handleRecipeUpdate, recipeUpdate,setRecipeUpdate,recipes,isLoading}}>
            {children}
        </CreateContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(CreateContext);
}