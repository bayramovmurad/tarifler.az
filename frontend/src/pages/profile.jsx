import { useEffect, useState } from 'react';
import UserRecipes from '../components/profile/userRecipes';
import UserAction from '../components/profile/userAction';
import UserUpdate from '../components/profile/userUpdate';
import { useGlobalContext } from '../context/context';

const Profile = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const { username, setUsername, userData, userLoading } = useGlobalContext();

    useEffect(() => {
        if (userData) {
            setUsername(userData?.user?.username);
        }
    }, [userData]);

    // Modern UI for loading state
    if (userLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-5 bg-slate-950 text-white">
                <div className="relative flex justify-center items-center w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div>
                </div>
                <p className="text-slate-400 font-medium tracking-wide animate-pulse">
                    Loading profile data...
                </p>
            </div>
        );
    }

    return (
        <section className="min-h-[calc(100vh-80px)] bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Top Section: Profile Information (Card) */}
                <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">

                    {/* User Information */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
                        {/* Avatar (User's initial letter) */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400/20 to-yellow-500/20 text-amber-400 flex items-center justify-center text-4xl font-bold shadow-inner border-4 border-slate-800">
                            {username ? username.charAt(0).toUpperCase() : "👤"}
                        </div>

                        <div className="text-center sm:text-left">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                {username || "User"}
                            </h2>
                            <span className="inline-block mt-2 px-3 py-1 bg-slate-800 text-amber-400 border border-slate-700 rounded-full text-sm font-medium">
                                Community Member
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0 justify-center sm:justify-end">
                        <button
                            className={`px-6 py-2.5 rounded-xl border font-medium transition-all active:scale-95 text-sm ${isFormVisible
                                ? "border-amber-400 text-amber-400 bg-amber-400/10"
                                : "border-slate-700 text-slate-200 bg-slate-800/50 hover:border-amber-400 hover:text-amber-400 hover:bg-slate-800"
                                }`}
                            type="button"
                            onClick={() => setIsFormVisible(!isFormVisible)}
                        >
                            {isFormVisible ? "Close Form" : "Update Profile"}
                        </button>

                        <div className="flex-shrink-0">
                            <UserAction />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: User's Recipes */}
                <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 sm:p-10">
                    <div className="mb-8 border-b border-slate-800 pb-5">
                        <h3 className="text-2xl font-bold text-white">My Recipes</h3>
                        <p className="text-slate-400 text-sm mt-1">All the dishes you have shared so far</p>
                    </div>

                    {/* UserRecipes component will list items internally */}
                    <UserRecipes />
                </div>

            </div>

            {/* Update Profile Modal */}
            {isFormVisible && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
                    onClick={() => setIsFormVisible(false)} // Closes on backdrop click
                >
                    <div
                        className="relative w-full max-w-lg"
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
                    >
                        <UserUpdate onClose={() => setIsFormVisible(false)} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Profile;