import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useAddLoginUser } from "../../query/userQuery";

const Login = () => {
    const navigate = useNavigate();
    const { mutate: addLoginUser, isLoading, error } = useAddLoginUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ defaultValues: { username: "", password: "" } });

    const onSubmit = async (data) => {
        reset();
        try {
            addLoginUser(data, {
                onSuccess: (response) => {
                    toast.success(response.message);
                    localStorage.setItem("token", response.token);
                    navigate("/");
                },
                onError: (error) => {
                    toast.error("Incorrect username or password");
                }
            });
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    };

    // Modern UI for loading state
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-5 text-white">
                <div className="relative flex justify-center items-center w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div>
                </div>
                <p className="text-slate-400 font-medium tracking-wide animate-pulse">
                    Logging in, please wait...
                </p>
            </div>
        );
    }

    return (
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
            <div className="max-w-md w-full bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-10">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400/10 text-amber-400 mb-4 border border-amber-400/20 text-2xl font-bold">
                        👋
                    </span>
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        Welcome Back!
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Log in to your account and discover delicious recipes.
                    </p>
                </div>

                {/* Login Form */}
                <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>

                    {/* Username */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Username</label>
                        <input
                            className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm"
                            placeholder="e.g., john_doe"
                            type="text"
                            {...register("username", { required: "Username is required" })}
                        />
                        {errors.username && <p className="text-xs font-medium text-rose-400 ml-1 mt-0.5">{errors.username.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Password</label>
                        <input
                            className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm"
                            placeholder="••••••••"
                            type="password"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <p className="text-xs font-medium text-rose-400 ml-1 mt-0.5">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:from-amber-300 hover:to-yellow-400 active:scale-95 transition-all text-base"
                    >
                        Sign In
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Login;