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
                    toast.error("Invalid username and password");
                }
            });
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    };

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="border border-black p-2 rounded-md"
                    placeholder="Enter your name"
                    type="text"
                    {...register("username", { required: "Username is required" })}
                />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}

                <input
                    className="border border-black p-2 rounded-md"
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                <input
                    type="submit"
                    value="Login"
                    className="border border-black bg-black text-white hover:text-black hover:bg-white duration-300"
                />
            </form>
        </div>
    );
};

export default Login;
