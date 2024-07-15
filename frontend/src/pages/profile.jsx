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

  useEffect(()=> {
      if (user) {
          dispatch(setUserUpdate(user.user.username));
        
      }
      
  },[])
    

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
        <div>
            <div>
                <h1>Profile</h1>
                <form onSubmit={handleUpdateUser}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={userUpdate}
                            onChange={(e) => dispatch(setUserUpdate(e.target.value))}
                        />
                    </div>
                    <button type="submit" disabled={userUpdateLoading}>
                        {userUpdateLoading ? 'Loading...' : 'Update'}
                    </button>
                </form>
                <div className='flex gap-x-4'>
                    <button onClick={() => deleteUser({ id: user.user._id })}>delete</button>
                    <button onClick={signOut}>sign out</button>
                </div>
            </div>
            <UserRecipes user={user} />
        </div>
    );
};

export default Profile;
