import { userGlobalContext } from "../../context/userContext";
import { useGetUserQuery, useUpdateUserMutation } from "../../redux/user/userApiSlice";
import { useForm } from "react-hook-form";

const UserUpdate = () => {
    const [updateUser, { isLoading: userUpdateLoading }] = useUpdateUserMutation();
    const { username, user, userLoading, handleUpdate } = userGlobalContext();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            username: username
        }
    });

    const onSubmit = async (data) => {
        try {
            if (user && user.user) {
                await updateUser({ id: user.user._id, username: data.username });
                handleUpdate(data.username);
                reset();
            }
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    if (userLoading) return <div>Loading user data...</div>;

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username:</label>
                    <input
                        className='border w-full p-2 border-black rounded-md mt-2'
                        type="text"
                        {...register("username", { required: "Username is required" })}
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
    );
};

export default UserUpdate;
