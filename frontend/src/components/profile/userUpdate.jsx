import { toast } from "react-toastify";
import { useGlobalContext } from "../../context/context";
import { useUpdateUser } from "../../query/userQuery";
import { useForm } from "react-hook-form";

const UserUpdate = ({ onClose }) => {
    const { mutate: updateUser, isLoading, error } = useUpdateUser();
    const { username, userData, userLoading, handleUpdate } = useGlobalContext();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            username: username
        }
    });

    const onSubmit = async (data) => {
        try {
            if (userData && userData?.user) {
                updateUser({ _id: userData.user._id, username: data.username }, {
                    onSuccess: () => {
                        handleUpdate(data.username);
                        reset();
                        if (onClose) onClose();
                    },
                    onError: (error) => {
                        toast.error("Incorrect username or password");
                    }
                });
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    }

    const handleCancel = () => {
        if (onClose) onClose();
    };

    if (userLoading) {
        return (
            <div className="flex flex-col items-center justify-center p-8 space-y-4 bg-slate-900 rounded-3xl border border-slate-800 text-white">
                <div className="relative flex justify-center items-center w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div>
                </div>
                <p className="text-slate-400 font-medium text-sm animate-pulse">
                    Loading data...
                </p>
            </div>
        );
    }

    return (
        <div className="w-full bg-slate-900 border border-slate-800 text-white rounded-3xl shadow-2xl p-6 sm:p-8 relative">
            {/* Close (X) Button */}
            <button
                type="button"
                onClick={handleCancel}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-700 flex items-center justify-center transition-all text-xl font-bold"
                title="Close"
            >
                ✕
            </button>

            {/* Header */}
            <div className="mb-6 border-b border-slate-800 pb-4 pr-12">
                <h3 className="text-2xl font-bold text-white tracking-tight">Update Profile</h3>
                <p className="text-sm text-slate-400 mt-1">Re-configure your username</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Username</label>
                    <input
                        className='border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm'
                        type="text"
                        placeholder="New username"
                        {...register("username", { required: "Username is required" })}
                    />
                </div>

                <div className="flex items-center gap-3 mt-2">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="w-1/3 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl border border-slate-700 transition-all text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        className='w-2/3 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:from-amber-300 hover:to-yellow-400 active:scale-95 transition-all text-sm disabled:opacity-50'
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Confirm Update'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserUpdate;