import { useForm } from "react-hook-form";
import { useAddRegisterUserMutation } from "../../redux/user/userApiSlice"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [addRegisterUser] = useAddRegisterUserMutation();
    const navigate = useNavigate();

    const {
        register,
        formState:{errors},
        handleSubmit,
        reset
    } = useForm({
        defaultValues:{username:"", password:""}});

    const onSubmit = async (data) => {
        reset();
        try {
            const response = await addRegisterUser(data).unwrap();
            localStorage.setItem("token", response.token);
            toast.success(response.message);
            navigate("/");
        } catch (error) {
            toast.error("Invalid username and password")
        }
    }

    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input className="border border-black p-2 rounded-md" placeholder="Enter your name" name="username" type="text"
                {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            <input className="border border-black p-2 rounded-md" placeholder="Enter your password" name="password" type="password"  {...register("password", { required: "Password is required" })}
             />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <input type="submit" value="Sign Up" className="border border-black bg-black text-white hover:text-black 
            hover:bg-white duration-300" />
        </form>
    )
}
export default Register