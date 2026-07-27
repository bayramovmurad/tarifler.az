import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDeleteUser } from "../../query/userQuery";
import { useGlobalContext } from "../../context/context";

const UserAction = () => {
    const navigate = useNavigate();
    const { mutate: deleteUser, isLoading, error } = useDeleteUser();
    const { userData } = useGlobalContext();

    useEffect(() => {
        if (isLoading) {
            localStorage.removeItem("token");
            navigate('/auth');
        }
    }, [isLoading, navigate]);

    const signOut = () => {
        localStorage.removeItem("token");
        navigate('/auth');
    };

    // Modern UI for loading state
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-5 bg-slate-950 text-white">
                <div className="relative flex justify-center items-center w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div>
                </div>
                <p className="text-slate-400 font-medium tracking-wide animate-pulse">
                    Processing, please wait...
                </p>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3">
            {/* Sign Out Button */}
            <button
                className='px-4 py-2.5 rounded-xl border border-slate-700 text-slate-200 bg-slate-800/50 hover:bg-slate-800 hover:text-amber-400 font-medium text-sm active:scale-95 transition-all'
                onClick={signOut}
                type="button"
            >
                Sign Out
            </button>

            {/* Delete Account Button */}
            <button
                className='px-4 py-2.5 rounded-xl border border-rose-500/30 text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 font-medium text-sm active:scale-95 transition-all'
                onClick={() => deleteUser({ _id: userData.user._id })}
                type="button"
            >
                Delete Account
            </button>
        </div>
    );
}

export default UserAction;