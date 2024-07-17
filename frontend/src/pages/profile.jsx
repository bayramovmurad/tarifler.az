import { useDispatch, useSelector } from 'react-redux';
import { useDeleteUserMutation, useGetUserQuery, useUpdateUserMutation } from '../redux/user/userApiSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserUpdate } from '../redux/user/userSlice';
import UserRecipes from '../components/profile/userRecipes';

const Profile = () => {
    const dispatch = useDispatch();
    const { userUpdate } = useSelector(state => state.user);
    const [updateUser, { isLoading: userUpdateLoading }] = useUpdateUserMutation();
    const [deleteUser, { isSuccess: isDeleteSuccess }] = useDeleteUserMutation();
    const { data: user } = useGetUserQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            dispatch(setUserUpdate(user.user.username));
        }

    }, [])


    useEffect(() => {
        if (isDeleteSuccess) {
            navigate('/auth');
        }
    }, [isDeleteSuccess, navigate]);

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            await updateUser({ id: user.user._id, username: userUpdate });
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    const signOut = () => {
        localStorage.removeItem("token");
        navigate('/auth');
    };

    return (
        <div className='w-[500px] mx-auto mt-10'>
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
                </form>
                <div className='flex justify-between mt-3'>
                    <button className='border border-black px-20 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300' type="submit" disabled={userUpdateLoading}>
                        {userUpdateLoading ? 'Loading...' : 'Update'}
                    </button>
                    <div className='flex gap-x-4'>
                        <button className='border border-black px-3 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300' onClick={() => deleteUser({ id: user.user._id })}>Delete Account</button>
                        <button className='border border-black px-3 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300' onClick={signOut}>Sign out</button>
                    </div>
                </div>
            </div>
            <UserRecipes user={user} />
        </div>
    );
};

export default Profile;
