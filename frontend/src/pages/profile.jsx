import { useGetUserQuery } from '../redux/user/userApiSlice';
import { useEffect, useState } from 'react';
import UserRecipes from '../components/profile/userRecipes';
import UserAction from '../components/profile/userAction';
import UserUpdate from '../components/profile/userUpdate';
import { useGlobalContext } from '../context/context';

const Profile = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const { username, setUsername, user, userLoading } = useGlobalContext();

    useEffect(() => {
        if (user) {
            setUsername(user.user.username);
        }
    }, [user]);

    if (userLoading) return <div>Loading user data...</div>;

    return (
        <div className='w-[500px] mx-auto mt-10'>
            <div>
                <h2 className='shadow-lg p-2 text-2xl font semibold'>{username}</h2>
                {isFormVisible && <UserUpdate />}
                <div className='flex justify-between mt-3'>
                    <button
                        className='border border-black px-20 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300'
                        type="button"
                        onClick={() => setIsFormVisible(!isFormVisible)}
                    >
                        Update
                    </button>
                    <div>
                        <UserAction />
                    </div>
                </div>
            </div>
            <UserRecipes />
        </div>
    );
};

export default Profile;
