import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation } from "../../redux/user/userApiSlice";
import { useEffect } from "react";

const UserAction = () => {
    const navigate = useNavigate();
    const [deleteUser, { isSuccess: isDeleteSuccess }] = useDeleteUserMutation();

    useEffect(() => {
        if (isDeleteSuccess) {
            navigate('/auth');
        }
    }, [isDeleteSuccess, navigate]);

    const signOut = () => {
        localStorage.removeItem("token");
        navigate('/auth');
    };

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
              onClick={() => deleteUser({ id: user.user._id })}
          >
              Delete Account
          </button>
     </div>
  )
}
export default UserAction