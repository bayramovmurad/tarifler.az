import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDeleteUser } from "../../query/userQuery";
import { useGlobalContext } from "../../context/context";

const UserAction = () => {
    const navigate = useNavigate();
    const {mutate:deleteUser, isLoading, error} = useDeleteUser();
    const {userData} = useGlobalContext();

    useEffect(() => {
        if (isLoading) {
            localStorage.removeItem("token");
            navigate('/auth');
        }
    }, [isLoading, navigate]);

    const signOut = () => {
        localStorage.removeItem("token");
        navigate('/auth');
    };

    if(isLoading){
        return <h1>Loading...</h1>
    }

  return (
     <div className="flex gap-x-4">
          <button
              className='border border-black px-3 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300'
              onClick={signOut}
          >
              Sign out
          </button>
          <button
              className='border border-black px-3 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300'
              onClick={() => deleteUser({ _id: userData.user._id })}
          >
              Delete Account
          </button>
     </div>
  )
}
export default UserAction