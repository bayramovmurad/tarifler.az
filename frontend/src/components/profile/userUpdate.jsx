import { toast } from "react-toastify";
import { useGlobalContext } from "../../context/context";
import { useUpdateUser } from "../../query/userQuery";
import { useForm } from "react-hook-form";

const UserUpdate = () => {
    const {mutate: updateUser, isLoading, error} = useUpdateUser();
    const { username, userData, userLoading, handleUpdate } = useGlobalContext();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            username: username
        }
    });

    const onSubmit = async (data) => {
        try {
            if (userData && userData?.user) {
                 updateUser({ _id: userData.user._id, username: data.username },{
                    onSuccess: () => {
                        handleUpdate(data.username);
                        reset();
                    },
                     onError: (error) => {
                         toast.error("Invalid username and password");
                     }
                 });
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    }

    if (userLoading) return <div>Loading user data...</div>;

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-white font-semibold">Username:</label>
                    <input
                        className='border w-full p-2 border-black rounded-md mt-2'
                        type="text"
                        {...register("username", { required: "Username is required" })}
                    />
                </div>
                <button
                    className='border border-black px-20 py-1 w-full rounded-md bg-black text-white hover:bg-white hover:text-black hover:font-semibold duration-300 mt-2'
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Submit Update'}
                </button>
            </form>
        </div>
    );
};

export default UserUpdate;
