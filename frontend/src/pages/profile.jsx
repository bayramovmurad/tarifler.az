import { useGetRecipesQuery } from '../redux/recipe/recipeApiSlice';
import { useDeleteUserMutation, useGetUserQuery, useUpdateUserMutation } from '../redux/user/userApiSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { data: user, error: userError, isLoading: userLoading } = useGetUserQuery();
    const { data: recipes, error: recipesError, isLoading: recipesLoading } = useGetRecipesQuery();
    const [updateUser, { isLoading: userUpdateLoading }] = useUpdateUserMutation();
    const [deleteUser, { isSuccess: isDeleteSuccess }] = useDeleteUserMutation();
    const navigate = useNavigate();

    // Form state'leri
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (user) {
            setUsername(user.user.username);
        }
    }, [user]);

    useEffect(() => {
        if (isDeleteSuccess) {
            navigate('/auth');
        }
    }, [isDeleteSuccess, navigate]);

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            await updateUser({ id: user.user._id, username});
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    const signOut = () => {
        localStorage.removeItem("token");
        navigate('/auth');
    };

    const userId = user?.user?._id;
    const userRecipes = recipes?.filter(item => item.userOwner?._id === userId);


    if (userLoading || recipesLoading) return <div>Loading...</div>;
    if (userError) return <div>Error loading user: {userError.message}</div>;
    if (recipesError) return <div>Error loading recipes: {recipesError.message}</div>;

    return (
        <div>
            <div>
                <h1>Profile</h1>
                <form onSubmit={handleUpdateUser}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
            <div>
                <h2>Your Recipes</h2>
                {userRecipes?.length > 0 ? (
                    <ul>
                        {userRecipes.map(recipe => (
                            <li key={recipe._id}>
                                <h3>{recipe.name}</h3>
                                <p>{recipe.instructions}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
