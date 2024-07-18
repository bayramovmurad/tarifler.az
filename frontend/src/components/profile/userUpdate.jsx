import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery, useUpdateUserMutation } from "../../redux/user/userApiSlice";
import { useEffect, useState } from "react";
import { setUserUpdate } from "../../redux/user/userSlice";

const UserUpdate = () => {
    const dispatch = useDispatch();
    const { userUpdate } = useSelector(state => state.user);
    const [updateUser, { isLoading: userUpdateLoading, isSuccess: isUpdateSuccess }] = useUpdateUserMutation();
    const { data: user } = useGetUserQuery();


    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            await updateUser({ id: user.user._id, username: userUpdate });
        } catch (error) {
            console.error('Update failed:', error);
        }
    };
  return (
        <div>
         
              <form onSubmit={handleUpdateUser}>
                  <div>
                      <label>Username:</label>
                      <input
                          className='border w-full p-2 border-black rounded-md mt-2'
                          type="text"
                          value={userUpdate}
                          onChange={(e) => dispatch(setUserUpdate(e.target.value))}
                      />
                  </div>
                  <button
                      className='border border-black px-20 py-1 w-full rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300 mt-2'
                      type="submit"
                      disabled={userUpdateLoading}
                  >
                      {userUpdateLoading ? 'Loading...' : 'Submit Update'}
                  </button>
              </form>
        
        </div>
  )
}
export default UserUpdate