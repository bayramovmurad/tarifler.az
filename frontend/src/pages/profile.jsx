import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery } from '../redux/user/userApiSlice';
import { useEffect, useState } from 'react';
import { setUserUpdate } from '../redux/user/userSlice';
import UserRecipes from '../components/profile/userRecipes';
import UserAction from '../components/profile/userAction';
import UserUpdate from '../components/profile/userUpdate';

const Profile = () => {
    const dispatch = useDispatch();
    const [isFormVisible, setIsFormVisible] = useState(false);
    const { data: user } = useGetUserQuery();
    
    useEffect(() => {
        if (user) {
            dispatch(setUserUpdate(user.user.username));
        }
    }, [user, dispatch]);


    return (
        <div className='w-[500px] mx-auto mt-10'>
            <div>
                <h2 className='shadow-lg p-2 text-2xl font semibold'>{user?.user?.username}</h2>
              {isFormVisible && <UserUpdate/>}
                <div className='flex justify-between mt-3'>
                    <button
                        className='border border-black px-20 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300'
                        type="button"
                        onClick={() => setIsFormVisible(!isFormVisible)}
                    >
                        Update
                    </button>
                    <div>
                        <UserAction/>
                    </div>
                </div>
            </div>
            <UserRecipes user={user} />
        </div>
    );
};

export default Profile;
