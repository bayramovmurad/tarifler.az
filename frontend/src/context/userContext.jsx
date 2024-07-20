import { createContext, useContext, useState } from "react"
import { useGetUserQuery } from "../redux/user/userApiSlice";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const { data: user, isLoading: userLoading } = useGetUserQuery();
    const [username, setUsername] = useState('');

    const handleUpdate = (newUsername) => {
        setUsername(newUsername);
    };

    return(
        <UserContext.Provider value={{username,setUsername,user,userLoading,handleUpdate}}>
            {children}
        </UserContext.Provider>
    )
};

export const userGlobalContext = () => {
    return useContext(UserContext);
}